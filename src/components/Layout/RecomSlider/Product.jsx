import React from "react";
import { Card, Button } from "react-bootstrap";
import watch from '../../../Assets/watch.png'
import ex from '../../../Assets/ex.svg'
import { FaStar } from 'react-icons/fa';



const ProductCard = props => {
  return (
    <>
      <Card style={{ width: "inherit" }}>
        <Card.Img variant="top" src={watch} style={{height: '250px', width: '200px'}} />
        <Card.Body>
         <p>Bluetooth Full Touch Call Smartwatch...</p>

<h5>AED 37.50</h5>
          <p><strike> AED 89 </strike> <span style={{color: 'green'}} > 57% Off</span></p>
          <p>Arrives <br /> <strong> Tommorow, June 14</strong></p>

          <div className="" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent:'space-between'
          }}>
            <img src={ex} alt="express"  />


            <p className="mb-0" style={{
            alignItems: 'center',
            display:'flex',
            justifyContent:'center'


          }}>
            <div className="d-flex justify-content-center align-items-center">
<FaStar color="orange" />

</div>
             <span style={{color: 'orange'}} >4.1</span> 
                  (950)</p>
          </div>

          
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
