import React from "react";
import Product from "../Product/Product";
import "./GridView.css"

const GridView = ({ products }) => {
  return (
    <div className="section">
      <div className="container-product grid grid-three-column">
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </div>
  );
};

export default GridView;