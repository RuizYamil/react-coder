import { useState, useEffect } from 'react'
import { getFetch } from '../ItemListContainer/mock'
import ItemDetail from './ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
    const [product, setproducts] = useState({})
    const {idDetail} = useParams()

    useEffect(() => {
        getFetch
        .then(resp => setproducts(resp.find(prod => prod.id === idDetail)))
    }, [idDetail])

    return (
        <center>
            <ItemDetail product={product} />
        </center>
    )
}

export default ItemDetailContainer
