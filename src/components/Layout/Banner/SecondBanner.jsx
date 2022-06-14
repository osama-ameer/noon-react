import React from 'react'
import table from '../../../Assets/table.png'

const SecondBanner = () => {
  return (
    // <div className='mt-4  justify-content-center align-items-center' style={{ backgroundColor: '#BABABA' }}>


    // <li className='d-lg-flex justify-content-lg-center align-items-lg-center  d-flex justify-content-center align-items-center flex-column flex-lg-row '>
    //     <ul >

    //         <div className='mt-4 d-lg-flex justify-content-lg-center align-items-lg-center  d-flex justify-content-center align-items-center flex-column flex-lg-row '>
    //         <img style={{width:" 310px", height: "auto"}}   className="  img-fluid align-items-center" src={table} alt="table" />
    //         <img style={{width:" 310px", height: "auto"}}className="ms-2 img-fluid align-contents-center"  src={table} alt="table" />
    //         <img style={{width:" 310px", height: "auto"}}className="ms-2 img-fluid" src={table} alt="table" />
    //         <img style={{width:" 310px", height: "auto"}}className="ms-2 img-fluid" src={table} alt="table" />
    //         </div>

    //     </ul>
    // </li>

    // </div>
    <div className="container-fluid">

    <div className="row mt-3 mb-3 p-4 bg-light">
      <div className="col-6 col-lg-3">
    <img    className="  img-fluid align-items-center" src={table} alt="table" />

      </div>
      <div className="col-6 col-lg-3">
    <img    className="  img-fluid align-items-center" src={table} alt="table" />

      </div>
      <div className="col-6 col-lg-3">
    <img    className="  img-fluid align-items-center" src={table} alt="table" />

      </div>
      <div className="col-6 col-lg-3">
    <img    className="  img-fluid align-items-center" src={table} alt="table" />

      </div>
    </div>
    </div>
  )
}

export default SecondBanner