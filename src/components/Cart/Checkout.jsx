import './Cart.css';
import { useCartContext } from '../Context/cartContext';
import { addDoc, collection, getFirestore, Timestamp } from 'firebase/firestore';
import { documentId, getDocs, where, query, writeBatch } from 'firebase/firestore';
import { useState } from 'react';
import Summary from './Summary/Summary';

function Checkout() {
    const {cartList, totalPrice} = useCartContext()
    const [conditional, setConditional] = useState(false);
    const [idOrder, setIdOrder] = useState('');
    const [dataForm , setDataForm ] = useState({
        email: '',
        name: '',
        phone: ''
    });

    const shopping = async (e) => {
        e.preventDefault()
        let order = {}

        order.date = Timestamp.fromDate(new Date()) 

        order.buyer = dataForm;
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
        .then(res => setIdOrder(res.id))
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
    
        batch.commit()
        setConditional(true)
    }
    function handleChange(e) {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div>
        {
            conditional  ?
                <Summary idOrder={idOrder} />
            : 
                <>   
                    <form 
                        onSubmit={shopping} 
                        onChange={handleChange} 
                    >
                        <input 
                            type='text' 
                            name='name' 
                            placeholder='Nombre' 
                            onChange={handleChange}
                            value={dataForm.name}
                        />
                        <br />
                        <input 
                            type='text' 
                            name='phone'
                            placeholder='Telefono' 
                            onChange={handleChange}
                            value={dataForm.phone}
                        />
                        <br/>
                        <input 
                            type='email' 
                            name='email'
                            placeholder='Email' 
                            onChange={handleChange}
                            value={dataForm.email}
                        />
                        <br/>
                        <button onClick={shopping} className='btn btn-outline-primary btn-block'>Comprar</button>
                    </form>
                </>
        }
    </div>
  )
}

export default Checkout