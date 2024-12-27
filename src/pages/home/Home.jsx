import React from 'react'
import Layout from '../../components/common/layout/Layout'
import Categories from './components/category/Categories'
import Herosection from './components/hero/Herosection'
import ProductSection from './components/product/ProductSection'
import Travel from './components/travel/Travel'

const Home = () => {
  return (
    <Layout>
        <Herosection/>
        <Categories/>
        <Travel/>
        <ProductSection/>
    </Layout>
  )
}

export default Home