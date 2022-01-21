import { useState, useContext, createContext } from 'react';

const CartContext = createContext([]);

export function useCartContext(){
    return useContext(CartContext)
}

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    function addCart(items){
        const index = cartList.findIndex(i => i.id === items.id)

        if(index > -1){
            const oldQuantity = cartList[index].quantity
            let newQuantity = oldQuantity + items.quantity
            cartList[index].quantity = newQuantity
            let aux = [...cartList]
            setCartList(aux)
        }else{
            setCartList([...cartList, items])
        }
    }
    
    function emptyCart(){
        setCartList([])
    } 

    return(
        <CartContext.Provider value={{
            cartList,
            addCart,
            emptyCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
