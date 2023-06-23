import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MyImage from "../MyImage/MyImage";
import { useProductContext } from "../ProductContext/ProductContext";
import FormatPrice from "../Helpers/FormatPrice";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import "./SingleProduct.css"
import Star from "../Star/Star"
import AddToCart from "../AddToCart/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct=()=>{

  const { getSingleProduct, isSingleLoading, singleProduct } =
  useProductContext();

const { id } = useParams();

const {
  id: alias,
  name,
  company,
  price,
  description,
  category,
  stock,
  stars,
  reviews,
  image,
} = singleProduct;


useEffect(() => {
  getSingleProduct(`${API}?id=${id}`);
}, []);

if (isSingleLoading) {
  return <div className="page_loading">Loading.....</div>;
}
  return (
    <>
       <div className="container-sing">
        <div className="grid grid-two-column">
          {/* product Images  */}
          <div className="product_images">
            <MyImage imgs={image} />
          </div>

          {/* product dAta  */}
          <div className="product-data">
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews} />

            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Meena Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> {company} </span>
              </p>
            </div>
            <hr/>
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </div>
    </>
  )
    
 
}


export default SingleProduct;
