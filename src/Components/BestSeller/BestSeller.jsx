import React from 'react'
import "../BestSeller/BestSeller.css"
import { useProductContext } from "../ProductContext/ProductContext";
import Product from '../Product/Product';

const BestSeller = () => {
    const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div> ......Loading </div>;
  }
  return (
    <>
    <div className='section'>
       <div className="container-1">
        <div className="common-heading">FEATURED PRODUCTS</div>
        <div className="grid grid-three-column">
          {featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
      </div>
    </>
  )
}

export default BestSeller