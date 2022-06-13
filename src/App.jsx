import React from 'react'
import Banner from './components/Layout/Banner/Banner'
import SecondBanner from './components/Layout/Banner/SecondBanner'
import Menu from './components/Layout/Menu/Menu'
import Navbar from './components/Layout/Navbar/Navbar'
import ProductSlider from './components/Layout/ProductSlider/ProductSlider'
import RecomSlider from './components/Layout/RecomSlider/RecomSlider'


const App = () => {

  
  return (
    <div className=''>
      <Navbar />
      <Menu />
      <Banner />
      <ProductSlider />

      <SecondBanner />

      <RecomSlider />


      {/* <Card /> */}

    </div>
  )
}

export default App