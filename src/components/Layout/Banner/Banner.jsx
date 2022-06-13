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
      <div className="row " >
        <div className="col-8">
          <div className="slider">
          <Carousel>
      <Carousel.Item interval={1000} >
        <img
       
          className="d-block w-100 img-fluid"
          src={hero1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
        
          className="d-block w-100 img-fluid"
          src={hero2}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={hero2}
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
          </div>
        </div>

       

        <div className="col-4 d-flex">

          <div className="col-6">
            <img src={men} className="img-fluid" />
          </div>


          <div className="col-6">
            <img src={women} className="img-fluid" />
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