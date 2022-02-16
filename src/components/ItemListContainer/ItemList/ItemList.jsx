import ItemListContainer from "../ItemListContainer"

function ItemList({greeting}) {

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemListContainer/>
        </div>
    )
}
export default ItemList
