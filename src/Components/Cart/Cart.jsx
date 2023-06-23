import React from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../ProductContext/cartContext";
import CartItem from "../CartItem/CartItem"
import "./Cart.css"
import FormatPrice from "../Helpers/FormatPrice";
const Cart = () => {
  const {cart,clearCart,total_price, shipping_fee}=useCartContext();
   console.log(cart)
  // if (cart.length===0){
  //   return( 
  //   <div className="empty">
  //       <h3 className="empty-h">No Cart In Item</h3>
  //   </div>
  //   )
  // }
  return(
  <>
   <div className="section-cart">
     <div className="container-cart">
        <div className="cart_heading grid grid-five-column">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr  className="hr-cart"/>

        <div className="cart-item">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
        <hr  className="hr-cart"/>
      
      <div className="cart-two-button">
          <NavLink to="/products">
            <button className="btn button continue"> continue Shopping </button>
          </NavLink>
          <button className="btn btn-clear button" onClick={clearCart}>
            clear cart
          </button>
        </div>

        {/* order total_amount */}
        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>subtotal:</p>
              <p>
                <FormatPrice price={total_price} />
              </p>
            </div>
            <div>
              <p>shipping fee:</p>
              <p>
                <FormatPrice price={shipping_fee} />
              </p>
            </div>
            <hr />
            <div>
              <p>order total:</p>
              <p>
                <FormatPrice price={shipping_fee + total_price} />
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>

   </>
   ) 
};


export default Cart;
