import { useState, useEffect } from 'react'
import { getFetch } from '../ItemListContainer/mock'
import ItemDetail from './ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 200px auto;
`;

function ItemDetailContainer() {
    const [product, setproducts] = useState({})
    const {idDetail} = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch
        .then(resp => setproducts(resp.find(prod => prod.id === idDetail)))
        .finally(()=> setLoading(false))
    }, [idDetail])

    return (
        <center>
            { loading ? <ClipLoader color='blue' loading={loading} css={override} size={70} />
                :
                <ItemDetail product={product} />
            }
        </center>
    )
}

export default ItemDetailContainer
