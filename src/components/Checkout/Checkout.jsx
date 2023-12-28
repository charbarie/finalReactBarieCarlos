import { useState, useContext } from "react";
import { CartContext } from "../../hooks/Context/Context";
import { Timestamp, collection, writeBatch, doc, getDoc, addDoc } from "firebase/firestore";
import { getfirebas } from "../../services/FirebaseConfig/FirebaseConfig";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

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

            const batch = writeBatch(getfirebas);
            const outOfStock = [];

            // Retrieve information from CartContext.
            for (const Item of cart) {
                const ItemRef = doc(getfirebas, 'Items', Item.id);
                const ItemDoc = await getDoc(ItemRef);
                if (ItemDoc.exists()) {
                    const stock = ItemDoc.data().stock;
                    if (stock >= Item.quantity) {
                        batch.update(ItemRef, {
                            stock: stock - Item.quantity
                        });
                    } else {
                        outOfStock.push(Item.title);
                    }
                }
            }

            if (outOfStock.length > 0) {
                setLoading(false);
                console.error('Error:', outOfStock);
            } else {
                const ordersRef = collection(getfirebas, 'orders');
                const orderDocRef = await addDoc(ordersRef, newOrder);
                setOrderId(orderDocRef.id);
                await batch.commit();
                resetItem();
                setLoading(false);
            }

        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
        }
    }

    if (loading) {
        return <h3>La orden se esta generando .</h3>
    }

    if (orderId) {
        return <h3> su orden es {orderId}</h3>
    }

    return (
        <div>
            <h2>Checkout</h2>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout;
