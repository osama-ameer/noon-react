import React from 'react'
import Banner from './components/Layout/Banner/Banner'
import SecondBanner from './components/Layout/Banner/SecondBanner'
import Menu from './components/Layout/Menu/Menu'
import Navbar from './components/Layout/Navbar/Navbar'
import ProductSlider from './components/ProductSlider/ProductSlider'

const App = () => {

  
  return (
    <div>
      <Navbar />
      <Menu />
      <Banner />

      <ProductSlider />
      <SecondBanner />

      {/* <Card /> */}

    </div>
  )
}

export default App