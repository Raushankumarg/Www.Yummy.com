import React, { useContext,useRef, useState } from 'react'
import './Navbar.css'


import logo from '../Assets/logo-icon.png'
import Cart_icon from '../Assets/Cart-icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav-dropdown.png'
const Navbar = () => {

const[menu, setMenu] = useState("home");
const {getTotalCartItem} = useContext(ShopContext);
const  menuRef = useRef();

const dropdown_toggle = (e)=>{
   menuRef.current.classList.toggle('nav-menu-visible');
   e.target.classList.toggle('open');
   
}



  return (
    <div className='navbar'>
    <div className='nav-logo'>
     <img src={logo} alt=""/>
     <p>Yummy</p>
    </div>
    <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt='' />
     <ul ref={menuRef} className='nav-menu'>
        <li onclock={()=>{setMenu("home")}}><Link style={{ textDecoration:'none'}} to='/home'>HOME</Link> {menu==="home"?<hr/>:<></>}</li>
        <li onclock={()=>{setMenu("grocery")}}><Link style={{ textDecoration:'none'}} to='/grocery'>GROCERY</Link> {menu==="grocery"?<hr/>:<></>}</li> 
        <li onclock={()=>{setMenu("fastfood")}}><Link style={{ textDecoration:'none'}} to='/fastfood'>FASTFOOD</Link> {menu==="fastfood"?<hr/>:<></>}</li>
        <li onclock={()=>{setMenu("fruits")}}><Link style={{ textDecoration:'none'}} to='/fruits'>FRUITS</Link> {menu==="fruits"?<hr/>:<></>}</li>
     </ul>
     <div className="nav-logo-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={Cart_icon} alt=''/></Link>
        <div className='nav-cart-count'>{getTotalCartItem()}</div>
     </div>
    </div>
  )
}

export default Navbar
