import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    // for check to the active button on navbar
    const [menu, setMenu] = useState("shop")
    const { getTotalCartItems } = useContext(ShopContext)

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                {/* <Link style={{ textDecoration: 'none' }} to="/" ><img src={logo} alt="" /></Link> */}
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none', color: '#FF8C00' }} to="/" >Shop</Link>  {menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none', color: '#FF8C00' }} to="/men">Man</Link> {menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none', color: '#FF8C00' }} to="/women">Woman</Link> {menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none', color: '#FF8C00' }} to="/kid">Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link style={{ textDecoration: 'none' }} to="/login"><button>Login</button></Link>
                <Link style={{ textDecoration: 'none' }} to="/cart"><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div >
    )
}

export default Navbar