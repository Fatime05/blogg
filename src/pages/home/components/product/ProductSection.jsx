import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../../../components/cards/Card'

import { getProductsThunk, postProductBasketThunk } from '../../../../redux/reducers/productSlice'
import style from './ProductSection.module.css'
const ProductSection = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.products);
    const loading = useSelector((state) => state.products.loading);
    const error = useSelector((state) => state.products.error);
    console.log(products);

    const addBasket = (item) => {
        dispatch(postProductBasketThunk(item))
    }

    useEffect(() => {
        dispatch(getProductsThunk())
    },[])

    if (error) return <p>XETA BAS VERDI</p>;
    if (loading) return <p>Yuklenir...</p>;
  return (
    <div className={style.container}>
        <div className={style.title}><h1>Products</h1></div>
        <div className={style.products}>{products && products.map((item) => <Card item = {item} addtobasket={() => addBasket(item)}/>)}</div>
    </div>
  )
}

export default ProductSection