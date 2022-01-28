import React from 'react';
import Item from '../Item/Item';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemList.css';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import {collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const override = css`
  display: block;
  margin: 200px auto;
`;

function ItemList() {
    const [products, setproducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategory} = useParams()

    useEffect(() => {
        if(idCategory){
            const db = getFirestore()
            const queryCollection = query(
                collection(db, 'items'), 
                where('category',  '==', idCategory))
            getDocs(queryCollection)
            .then(res => setproducts(res.docs.map( prod => ({id: prod.id, ...prod.data() }) ) ))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }else{
            const db = getFirestore()
            const queryCollection = query(collection(db, 'items'))
            getDocs(queryCollection)
            .then(res => setproducts(res.docs.map( prod => ({id: prod.id, ...prod.data() }) ) ))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
    }, [idCategory])

    return (
        <div className='center'>
            { loading ? <ClipLoader color='blue' loading={loading} css={override} size={70} />
                :
                products.map(prod => <div 
                    key={prod.id}
                    className='col-md-4'
                >
                    <Item prod={prod}/>
                </div>
            )}
        </div>  
    )
}

export default ItemList
