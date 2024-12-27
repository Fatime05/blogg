import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/cards/Card';
import Layout from '../../components/common/layout/Layout'
import { getBasketThunk } from '../../redux/reducers/basketSlice';
const Basket = () => {
  const dispatch  =useDispatch();
  const basketProducts = useSelector((state) => state.basket.basket)
  useEffect(() => {
    dispatch(getBasketThunk())
  },[])
  return (
    <Layout>
      {basketProducts && basketProducts.map((item) => <Card key={item.id} item = {item}/>)}
    </Layout>
  )
}

export default Basket