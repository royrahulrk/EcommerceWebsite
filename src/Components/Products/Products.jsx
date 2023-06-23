import React from "react";
import FilterSection from "../FilterSection/FilterSection";
import Sort from "../Sort/Sort"
import ProductList from "../ProductList/ProductList"
// import { useFilterContext } from "../ProductContext/FilterContext";
const Products = () => {
  return(
    <>
    <div className="container-product grid grid-filter-column" style={{alignItems:"normal"}}>
        <div>
          <FilterSection />
        </div>

        <section className="product-view--sort" style={{backgroundColor:"#ffff",padding:"0"}}>
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
  
    </>
  ) 
};



export default Products;
