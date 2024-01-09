import { useState, useContext } from 'react';
import { CartContext } from '../../../src/components/Context/CardContext.jsx';
import { Timestamp, collection, writeBatch, doc, getDoc, addDoc } from "firebase/firestore";
import CheckoutForm from '../CheckoutForm/CheckoutForm.jsx';
import { firebaseConnection } from '../../services/firebase/firebaseConfig.js';
import './Checkout.css'




const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, totalQuantity, resetItem, clearCart } = useContext(CartContext);
    let orderDocRef;

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
                totalItems: totalQuantity || 0,
                orderDate: Timestamp.fromDate(new Date())
            };

            const outOfStock = await updateStockAndCreateOrder(newOrder);

            if (outOfStock.length > 0) {
                setLoading(false);
                console.error('Error: Productos sin stock:', outOfStock);
            } else {

                setOrderId(orderDocRef.id);
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
            orderDocRef = await addDoc(ordersRef, newOrder);
            await batch.commit();
        }

        return outOfStock;
    }

    if (loading) {
        return <h3 >Procesando la orden...</h3>;
    }

    if (orderId) {
        clearCart()
        return <h3 >Su orden ha sido creada exitosamente. Número de orden: {orderId}</h3>;


    }

    return (
        <div className='FinalyCheck'>
            <h2>Finalizar compra </h2>
            <div className='CheckoutFormContainer'>
                <CheckoutForm onConfirm={createOrder} />
            </div>
        </div>
    );
}



export default Checkout;
