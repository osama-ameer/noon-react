import React from 'react'
import './Navbar.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import noon from "../../../Assets/noon.svg"
import sa from "../../../Assets/sa.svg"
import dropdownArrow from "../../../Assets/dropdownArrow.svg"
import user_thin from "../../../Assets/user_thin.svg"
import cart from "../../../Assets/cart.svg"







const Navbar = () => {
  return (
      <>
  
       {/* Header */}
       <div className="header">
           {/* Top Header */}
           <div className="top-header p-2">

               {/* Logo */}
                <div className="logo1 inside ">
                    <img className='logo' src={noon} alt="logo" />
                </div>

                {/* Deliver to  */}
                <div className="drop-down ms-3 me-3">  
                    <img  src={sa} alt="logo" />
                    
              <p className='ms-2 me-2 mb-0' style={{width: '70px'}}>Deliver to <br />
                   <center> <strong> Riyadh</strong> </center> </p> 

                   <div className="dropArrow">
                   <img  src={dropdownArrow} alt="dropDown" />
                   </div>
           
                </div>

                {/* Search Bar */}

                <div className="flex-grow-1 align-items-center">
                <Form.Group as={Row}  controlId="formPlaintextPassword">
        
        <Col sm="10" className='flex-grow-1 me-4 align-items-center mb-0 '>
          <Form.Control className='shadow-none in' type="text" placeholder="What are you looking for?" />
        </Col>
      </Form.Group>
                </div>

                {/* Buttons singin/singup/arabic */}

                <div className="buttons ">

                    <div className="arbi inside">
                    <button className='buttonsUsers ms-2 '>
                            <span className='me-2'>Arbi</span>
                           
                        </button>
                    </div>

                    <div className="signin inside">
                        <button className='buttonsUsers ms-2 align-items-center '>
                           <strong> <span className='me-2'>Sign In</span></strong>
                            <img className='me-2' style={{width: "17px", height: "17px"}} src={user_thin} alt="user"/>
                        </button>
                    </div>

                    <div className="signup inside">
                    <button className='buttonsUsers2 me-2'>
                           <strong> <span className='me-2 ms-2'>Cart</span></strong>
                            <img src={cart} alt="user"/>
                        </button>
                    </div>
                </div>

           </div>
       </div>
  
   </>
  )
}

export default Navbar