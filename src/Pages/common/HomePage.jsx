import React from 'react'
import Header from '../../components/Header/Header'
import Products from '../../components/Products/index'
import Footer from '../../components/Footer/Footer'
const HomePage = () => {
  return <>
    <Header />
    <Products context='Home' />
    <Footer />
  </>
}

export default HomePage