import { useState, useContext } from "react";
import { CartContext } from "../Context/CardContext";
import { Timestamp, collection, writeBatch, doc, getDoc, addDoc } from "firebase/firestore";
import CheckoutForm from "../Checkout/Checkout";
import { firebaseConnection } from "../../services/firebase/firebaseConfig";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, totalQuantity, resetItem } = useContext(CartContext);

    const createOrder = async ({ userName, userPhone, userEmail }) => {
        setLoading(true);

        try {
            const newOrder = {
                buyer: {
                    userName,
                    userPhone,
                    userEmail
                },
                orderItems: cart,
                totalItems: totalQuantity,
                orderDate: Timestamp.fromDate(new Date())
            }

            const outOfStock = await updateStockAndCreateOrder(newOrder);

            if (outOfStock.length > 0) {
                setLoading(false);
                console.error('Error: Productos sin stock:', outOfStock);
            } else {
                setOrderId(orderId);
                resetItem();
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    }

    const updateStockAndCreateOrder = async (newOrder) => {
        const batch = writeBatch(firebaseConnection);
        const outOfStock = [];

        for (const item of cart) {
            const itemRef = doc(firebaseConnection, 'Productos', item.id);
            const itemDoc = await getDoc(itemRef);

            if (itemDoc.exists()) {
                const stock = itemDoc.data().stock;

                if (stock >= item.quantity) {
                    batch.update(itemRef, { stock: stock - item.quantity });
                } else {
                    outOfStock.push(item.title);
                }
            }
        }

        if (outOfStock.length === 0) {
            const ordersRef = collection(firebaseConnection, 'orders');
            const orderDocRef = await addDoc(ordersRef, newOrder);
            setOrderId(orderDocRef.id);
            await batch.commit();
        }

        return outOfStock;
    }

    if (loading) {
        return <h3>Procesando la orden...</h3>
    }

    if (orderId) {
        return <h3>Su orden ha sido creada exitosamente. Número de orden: {orderId}</h3>
    }

    return (
        <div>
            <h2>Checkout</h2>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
}

export default Checkout;
