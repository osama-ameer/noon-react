import React from 'react'
import banner from '../../../Assets/banner.png'
import Carousel from 'react-bootstrap/Carousel';
import hero1 from '../../../Assets/hero1.gif'
import hero2 from '../../../Assets/hero2.png'
import men from '../../../Assets/men.png'
import women from '../../../Assets/women.png'


 
const Banner = () => {
  return (
    
    <div>
      {/* Banner image */}
      <img className='img-fluid' src={banner} alt="banner" />


        {/* Slider Section */}
      <div className="row g-0 " >
        <div className="col-lg-8 col-12">
          <div className="slider">
          <Carousel style={{height: '220px', backgroundColor:'red'}}>
      <Carousel.Item style={{height: '220px', backgroundColor:'red'}} interval={1000} >
        <img

          style={{height: '100%'}}
          className="d-block w-100 "
          src={hero1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={500} style={{height: '220px', backgroundColor:'red'}}>
        <img
                   style={{height: '100%'}}

          className="d-block w-100 "
          src={hero2}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item style={{height: '220px', backgroundColor:'red'}}>
        <img
                   style={{height: '100%'}}

          className="d-block w-100 "
          src={hero2}
          alt="Third slide"
          
        />
       
      </Carousel.Item>
    </Carousel>
          </div>
        </div>

       

        <div className="col-lg-4 col-12 d-flex">

          <div className="col-6">
            <img src={men} className="img-fluid w-100" />
          </div>


          <div className="col-6">
            <img src={women} className="img-fluid w-100" />
          </div>
        </div>

       
      </div>


      {/* <div className="catSlider">
        <section className='innerSlider'>
        <div className="slider">
          <Carousel>
      <Carousel.Item interval={1000} >
       <h2>first Item</h2>
      </Carousel.Item>
      <Carousel.Item interval={1000} >
       <h2>first Item</h2>
      </Carousel.Item>
      <Carousel.Item interval={1000} >
       <h2>first Item</h2>
      </Carousel.Item>
    </Carousel>
          </div>
        </section>
      </div> */}




    </div>
  )
}


export default Banner