import React from "react";
import "../styles/productCard.css";
 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBookOpen } from "@fortawesome/free-solid-svg-icons";
 
 
const ProductCard = () => {
 
  return (
    <>
      <div className="product-card p-0">
        <div className="image-wrapper  ">
          <img
             
            className="img-fluid  product-image"
            src={ "https://picsum.photos/200/300"}
           
            alt="product  image "
          />
        </div>


        <div className="content px-3 pt-2 position-relative pb-3">
          <FontAwesomeIcon
            
            style={{ cursor: "pointer" }}
            className="read-more   p-3 m-1 rounded-circle  position-absolute  "
            icon={faBookOpen}
            size="2x"
          />

          <h4>
              this is the product title 
          </h4>
          <p  >
             there are many variations of passages of Lorem Ipsum available, but
          </p>

          <h3>$90</h3>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
