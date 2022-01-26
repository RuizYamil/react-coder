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
    
    const totalPrice = () => {
        return cartList.reduce((acum, value) => (acum + (value.quantity * value.price)), 0)
    }

    const totalQuantity = () => {
        return cartList.reduce((acum, item) => acum = acum + item.quantity , 0)
    }

    const deleteItem = (items) => {
        const item = cartList.find( (prod) => prod.id === items.id )
        const indice = cartList.indexOf(item)
        return cartList.splice(indice, 1)
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addCart,
            emptyCart,
            totalQuantity,
            totalPrice,
            deleteItem
        }}>
            {children}
        </CartContext.Provider>
    )
}
