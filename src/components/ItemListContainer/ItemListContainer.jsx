import React from 'react'
import ItemList from './ItemList/ItemList'

function ItemListContainer({greeting}) {

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList />
        </div>
    )
}
export default ItemListContainer
