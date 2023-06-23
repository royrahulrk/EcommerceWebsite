import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";
import "./AddToCart.css"
import CartAmountToggle from '../CartAmountToggle/CartAmountToggle';
import { useCartContext } from '../ProductContext/cartContext';
const AddToCart = ({product}) => {

  const {addToCart}=useCartContext();
    const { id, colors, stock } = product;

    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);
  
    const setDecrease = () => {
      amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };
    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
      };
  return (
    <>
      <div className="colors">
        <p>
          Color:
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}>
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>

      {/* add to cart  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink to="/cart" onClick={() => addToCart(id, color, amount, product)}>
        <button className="btn button">Add To Cart</button>
      </NavLink>
    </>
  )
}

export default AddToCart