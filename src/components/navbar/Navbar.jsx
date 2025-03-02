import React, { useState } from "react";
import './Navbar.css';
import logo from '../../assets/images/tsspl-logo.jpg';
import menu_icon from '../../assets/images/menuicon2.jpg';
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    const location = useLocation();
    return (
        <>
            <div className="logo-div">
            <Link to="/"><img src={logo} width="937" height="75" className="logo" alt="" /></Link>
            </div>
            <nav className="container">

                <ul className={mobileMenu ? '' : "hide-menu"}>
                    <li className={location.pathname === "/" ? "active" : ""}><Link to="/" onClick={() => toggleMenu(false)}>HOME</Link></li>
                    <li className={location.pathname === "/product" ? "active" : ""}><Link to="/product" onClick={() => toggleMenu(false)}>PRODUCT</Link> </li>
                    <li className={location.pathname === "/about" ? "active" : ""}><Link to="/about" onClick={() => toggleMenu(false)}>ABOUT US</Link></li>
                    <Link to="/contact" onClick={() => toggleMenu(false)}><li className={`contactbtn ${location.pathname === "/contact" ? "active" : ""}`}>CONTACT US</li></Link>
                </ul>
                <img src={menu_icon} className="menu-icon" alt="" onClick={toggleMenu} />
            </nav>
        </>
    )
}

export default Navbar

