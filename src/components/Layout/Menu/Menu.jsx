import React from 'react'
import './Menu.css'
import dropdownArrow from "../../../Assets/dropdownArrow.svg"


const Menu = () => {

  const [category, setCat] = React.useState('')

  console.log(category);
  return (
    <>
      <div className='navbarmenu '>
        <div className=" d-flex  " >


          <div className="menu-items ms-0 d-flex  ">

            <button className='ps-3  buttonsCat  '
              // onMouseEnter={() => setCat('default')}
              // onMouseLeave={() => setCat('')}

              style={{ width: '220px' }}>
              <strong> <span className='me-2'>ALL CATEGORIES</span></strong>
              <img style={{ width: "17px", height: "17px" }} src={dropdownArrow} alt="user" />


              <div className=" megamenu " style={{
                position: 'absolute',
                background: "#000000a6",
              
                top: "109px",
               left: 0,
               
                zIndex: 1060,
               
               
               
              }}>
                <div className=' d-flex ' style={{ height: '500px', zIndex: 9999, }} >
                  <div className="sub-cat bg-light  pt-2" style={{ width: '220px', }}>

                    {/* <hr /> */}
                    <li className='list-items mt-4'>

                      <ul className='text-start cat '>Electronic</ul>
                      <ul className='text-start cat mob' onMouseEnter={() => setCat('mob')} onMouseLeave={() => setCat('')}>Mobile</ul>
                      <ul className='text-start cat'>Electronic</ul>
                      <ul className='text-start cat'>Electronic</ul>
                      <ul className='text-start cat'>Electronic</ul>
                      <ul className='text-start cat'>Electronic</ul>
                      <ul className='text-start cat'>Electronic</ul>
                      <ul className='text-start cat'>Electronic</ul>
                      <ul className='text-start cat'>Electronic</ul>

                    </li>





                  </div>



                  <div className="sub-cat bg-light  ps-3 pt-2" style={{ width: '500px' }}>
                   {category === 'mob' ? (<h4 className='text-start' >Mobile</h4>) : (<h4 className='text-start' >Electronics and Mobile</h4>)}
                    <hr />

                    <div className="d-flex">
                      <li className='list-items mt-2'>

                        {category === 'mob' ? (<ul className='text-start cat'> Mobile </ul>) : (<ul className='text-start cat'> Electronics </ul>)}
                        <ul className='text-start cat'>Mobile</ul>
                        <ul className='text-start cat'>Electronic</ul>
                        <ul className='text-start cat'>Electronic</ul>
                        <ul className='text-start cat'>Electronic</ul>
                        <ul className='text-start cat'>Electronic</ul>
                        <ul className='text-start cat'>Electronic</ul>
                        <ul className='text-start cat'>Electronic</ul>
                        <ul className='text-start cat'>Electronic</ul>

                      </li>


                      <li className='list-items mt-2 ms-5'>

                        <ul className='text-start cat'>Mobile</ul>
                        <ul className='text-start cat'>Electronic</ul>
                        <ul className='text-start cat'>Electronic</ul>
                        <ul className='text-start cat'>Electronic</ul>
                        <ul className='text-start cat'>Electronic</ul>
                        <ul className='text-start cat'>Electronic</ul>
                        <ul className='text-start cat'>Electronic</ul>
                        <ul className='text-start cat'>Electronic</ul>
                        <ul className='text-start cat'>Electronic</ul>

                      </li>
                    </div>



                  </div>
                </div>
              </div>


            </button>







          </div>


          <div className="categories d-flex" style={{ position: 'relative' }}>
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








    </>
  )
}

export default Menu