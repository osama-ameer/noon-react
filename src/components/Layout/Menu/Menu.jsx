import React from 'react'
import './Menu.css'
import dropdownArrow from "../../../Assets/dropdownArrow.svg"


const Menu = () => {

  const [category, setCat] = React.useState('')


  return (
    <>
    <div className='navbarmenu '>
    <div className=" d-flex  align-items-center" >
    

      <div className="menu-items ms-0 d-flex  ">
        
        <button className='ps-3  buttonsCat justify-content-space-between align-items-center ' 
        onMouseEnter={() => setCat('default')}
        onMouseLeave={() => setCat('')}

        style={{width: '220px'}}>
                           <strong> <span className='me-2'>ALL CATEGORIES</span></strong>
                            <img  style={{width: "17px", height: "17px"}} src={dropdownArrow} alt="user"/>
                        </button>
    
      </div>


<div className="categories d-flex" style={{position: 'relative'}}>
                      <button className='  buttonsCat2 justify-content-space-center align-items-center' >
                          <strong>ELECTRONICS</strong>
                        </button>

                        <button className='  buttonsCat2 justify-content-space-center align-items-center' >
                          <strong>ELECTRONICS</strong>
                        </button>


                        <button className='  buttonsCat2 justify-content-space-center align-items-center' >
                          <strong>ELECTRONICS</strong>
                        </button>


                        <button className='  buttonsCat2 justify-content-space-center align-items-center' >
                          <strong>ELECTRONICS</strong>
                        </button>


                       
    </div>


                        

    </div>
    </div>


   <div className="back-opacity " style={{
          position: 'absolute',
          background: "#000000a6",
          left: 0,
          top:"110px",
          height:"100vh",
          bottom:"0",
          zIndex: 1060,
          width: "100%",
          height: "900px",
          overflowX: 'hidden',
          overflowY: 'auto',
          outline: 0,
      }}>
    <div className=' d-flex' style={{height: '500px', zIndex: 9999, }} >
    <div className="categories bg-light"  style={{width: '220px'}}>

      <li className='list-items'>

        <ul>Electronic</ul>
        <ul>Electronic</ul>
        <ul>Electronic</ul>
        <ul>Electronic</ul>
        <ul>Electronic</ul>
        <ul>Electronic</ul>
        <ul>Electronic</ul>
        <ul>Electronic</ul>
        <ul>Electronic</ul>

      </li>
    </div>

    <div className="sub-cat bg-danger justify-content-center align-items-center"  style={{width: '500px'}}>
      <h4>Electronics</h4>
      <hr />
    </div>
    </div>
    </div> 





    </>
  )
}

export default Menu