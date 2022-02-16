import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/cartContext';
import './Cart.css';

function Cart() {
    const {cartList, emptyCart, totalPrice, deleteItem} = useCartContext()

    return (
        <div>  
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
                    <Link to={'/checkout'}><button className='btn btn-outline-primary btn-block'>Generar Orden</button></Link>
                </div>
                </>
            )}            
        </div>
    )
}
export default Cart;
