import React from "react";
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { X } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Footer = () => {
    return (<>
        <div className="main-footer">
            <div className="footer">

                <div className="footer-part-1 footer-div">
                    <div className="footer-block-title">
                        <p>Navigation</p>
                    </div>

                    <div className="footer-part-1-links">
                        <ul>
                            <li><Link to="/">Home</Link> </li>
                            <li><Link to="/product">Product</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-part-2 footer-div">
                    <div className="footer-block-title">
                        <p>Address</p>
                    </div>
                    <div className="footer-address">
                        <p>Darshan Shah</p>
                        <p>C/101, Ambika Towers, Pump house</p>
                        <p>Andheri East , Mumbai - 400093</p>
                        <p>Tel: +91 9820939999</p>
                        <p>Fax.: +91 2267419052</p>
                        <p>IEC Code NO.: 030808826</p>
                        <p>GST NO: 27AADCT0850F1ZK</p>
                        <p>EMAIL:- <a href="mailto:sales@totalsupplysolutions.com" className="maito"> sales@totalsupplysolutions.com </a><br></br>
                            <a href="mailto:totalsupplysolutions@gmail.com" className="maito">totalsupplysolutions@gmail.com</a></p>


                    </div>
                </div>
                <div className="footer-part-3 footer-div">
                    <div className="footer-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5365.308773147059!2d72.85564307836316!3d19.126287175423805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c82908b0a56f%3a0xb6f3314d85e78934!2sambika%20towers!5e0!3m2!1sen!2sin!4v1729669909697!5m2!1sen!2sin"
                            style={{ border: 0, height: "100%", width: "100%" }}
                            aria-hidden="false"
                        />
                    </div>
                </div>
            </div>
            <div className="right-reserve">
                <p>Copyright © TSSPL 2024</p>
                <div className="social-links">
                    <div className="icons">
                        <a href="#" target="_blank" className="insta-icon"><InstagramIcon sx={{ fontSize: 30 }}  /></a>
                    </div>
                    <div className="icons">
                        <a href="#" target="_blank" className="fb-icon"><FacebookIcon sx={{ fontSize: 30 }}  /></a>
                    </div>
                    <div className="icons">
                        <a href="#" target="_blank" className="x-icon"><X sx={{ fontSize: 30 }}  /></a>
                    </div>

                </div>
            </div>
        </div>
    </>)
}

export default Footer