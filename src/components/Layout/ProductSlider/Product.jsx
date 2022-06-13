import React from "react";
import { Card, Button } from "react-bootstrap";
import grocery from '../../Assets/grocery.png'

const ProductCard = props => {
  return (
    <>
      <div className="image-card">
          <img className="img-fluid" src={grocery} alt="grocery" />
      </div>
    </>
  );
};

export default ProductCard;
