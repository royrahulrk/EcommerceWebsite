import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import "./Nav.css"
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import Logo from "../../image/iSHOP Logo.png"
import { useCartContext } from '../ProductContext/cartContext';

const Header = () => {

  const [menuIcon, setMenuIcon] = useState();
  const {total_item}=useCartContext()
  return (
   
    <>
    <div className='mainHeader'>
        <NavLink to="/">
          <img src={Logo} alt='my logo img' className='logo' />
        </NavLink>

        
      </div>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className='navbar-lists'>
          <li> <NavLink to={"/"} className="navbar-link">HOME</NavLink></li>
          <li> <NavLink to={"/products"} className="navbar-link">STORE</NavLink></li>
          <li> <NavLink  className="navbar-link">IPHONE</NavLink></li>
          <li> <NavLink  className="navbar-link">IPAD</NavLink></li>
          <li> <NavLink  className="navbar-link">MACBOOK</NavLink></li>
          <li> <NavLink  className="navbar-link">ACCESORIES</NavLink></li>
          <li> <NavLink to={"/cart"} className="navbar-link cart-trolley--link"> <FiShoppingCart className='cart-trolley'/>
          <span className='cart-total--item'>{total_item}</span>
          </NavLink></li>

        </ul>
      
       
        {/* two button for open and close of menu */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </>
  )
}


export default Header