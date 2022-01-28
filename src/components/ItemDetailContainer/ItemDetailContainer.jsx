import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const override = css`
  display: block;
  margin: 200px auto;
`;

function ItemDetailContainer() {
    const [product, setproducts] = useState({})
    const {idDetail} = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore()
        const queryProd = doc(db, 'items', idDetail)
        getDoc(queryProd)
        .then((resp) => { setproducts({id: resp.id, ...resp.data() }) })
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
