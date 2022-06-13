import React from "react";
import grocery from '../../../Assets/grocery.png'


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
