import React from 'react'
import './Menu.css'
import dropdownArrow from "../../../Assets/dropdownArrow.svg"


const Menu = () => {

  const [category, setCat] = React.useState('')


  return (
    <>
    <div className=" d-flex  align-items-center" >

      <div className="menu-items ms-0 d-flex ">
        
        <button className='ps-3  buttonsCat justify-content-space-between align-items-center ' 
        onMouseEnter={() => setCat('default')}
        onMouseLeave={() => setCat('')}

        style={{width: '200px'}}>
                           <strong> <span className='me-2'>ALL CATEGORIES</span></strong>
                            <img  style={{width: "17px", height: "17px"}} src={dropdownArrow} alt="user"/>
                        </button>
    
      </div>


<div className="categories d-flex">
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
    { category == 'default' ? (<div>hello</div>) : null}

    </>
  )
}

export default Menu