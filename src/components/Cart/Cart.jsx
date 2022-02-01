import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/cartContext';
import './Cart.css';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { documentId, getDocs, where, query, writeBatch } from 'firebase/firestore';
import { useState } from 'react';

function Cart() {
    const {cartList, emptyCart, totalPrice, deleteItem} = useCartContext()
    const [setConditional] = useState(false);

    const shopping = async (e) => {
        let order = {}

        order.buyer = {name: 'Yamil', email: 'user@gmail.com', tel: '1162673245'}
        order.total = totalPrice();

        order.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const name = cartItem.name;
            const price = cartItem.price * cartItem.quantity;
            const quantity = cartItem.quantity;

            return {id, name, price, quantity}
        })
        
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        await addDoc(orderCollection, order)
        .then(res => console.log(res.id))
        .catch(err => console.log(err))

        const queryColection = collection(db, 'items')

        const queryUpdateStock = query(
            queryColection, where( documentId(), 'in', cartList.map(it => it.id))
        )
    
        const batch = writeBatch(db)
    
        await getDocs(queryUpdateStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: res.data().stock - cartList.find(item => item.id === res.id).quantity
            })
        ))
        .catch(err => console.log(err))
        .finally(() => console.log('Stock actualizado'))
    
        batch.commit()
        setConditional(true)
    }
    
    return (
        <>
        {cartList.length === 0 ? (
            <div>
                <h2>Aún no agregaste productos al carrito</h2>
                <p>¿No sabés qué comprar? ¡Miles de productos tecnológicos te esperan!</p>
                <Link to={'/'}><button className='btn btn-outline-primary btn-block'>Ir a comprar</button></Link>
            </div>
        ) : (
            <>
            <div className='container-list-cart'> 
                {cartList.map(prod => 
                    <div className='list-cart' key={prod.id}>
                        <div className='module'>
                            <p>Titulo</p>
                            {prod.name}
                        </div>
                        <div className='module'>
                            <p>Precio</p>
                            {prod.price}$ 
                        </div>
                        <div className='module'>
                            <p>Cantidad</p>
                            {prod.quantity}  
                        </div>
                        <div className='module'>
                            <p>Eliminar</p>
                            <button onClick={() => deleteItem(prod.id)} className='btn btn-outline-primary btn-block'>X</button> 
                        </div> 
                    </div>)}
                {`Precio total: ${totalPrice()}`}
                <button onClick={emptyCart} className='btn btn-outline-primary btn-block'>Vaciar Carrito</button>
                <button onClick={shopping} className='btn btn-outline-primary btn-block'>Generar Orden</button>
            </div>
            </>
            )}
        </>
    )
}
export default Cart;
