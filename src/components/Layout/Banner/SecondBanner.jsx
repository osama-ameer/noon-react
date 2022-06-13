import React from 'react'
import table from '../../../Assets/table.png'

const SecondBanner = () => {
  return (
    <div className='justify-content-center align-items-center' style={{ backgroundColor: '#BABABA' }}>


    <li className='d-flex justify-content-center align-items-center '>
        <ul >

            <div className='d-flex justify-content-center align-items-center'>
            <img style={{width:" 310px", height: "auto"}}   className=" img-fluid align-items-center" src={table} alt="table" />
            <img style={{width:" 310px", height: "auto"}}className=" img-fluid align-contents-center"  src={table} alt="table" />
            <img style={{width:" 310px", height: "auto"}}className=" img-fluid" src={table} alt="table" />
            <img style={{width:" 310px", height: "auto"}}className=" img-fluid" src={table} alt="table" />
            </div>

        </ul>
    </li>

    </div>
  )
}

export default SecondBanner