import React, { useState } from "react";
import './Contact.css';
import { Link } from "react-router-dom";
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { X } from "@mui/icons-material";

const ContactUs = () => {

    const [formdata, setFormdata] = useState({
        name: '',
        phone: '',
        email: '',
        requirement: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // const formURL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfYYRSaGpSzrmOlQg6VBfDAzYp9u1N7W8xAjb2-zd3B5I28LQ/formResponse';
        const formURL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeSqvh2BxENIu7hM9v1l2a9nIb0oWZ4DJsfvrfMkEDalSl8wg/formResponse';
        const data = new FormData();
        data.append("entry.2005620554", formdata.name);
        data.append("entry.1166974658", formdata.phone);
        data.append("entry.1045781291", formdata.email);
        data.append("entry.839337160", formdata.requirement);

        fetch(formURL, {
            method: 'POST',
            mode: 'no-cors',
            body: data
        })
            .then(() => {
                setSubmitted(true);
                setFormdata({ name: '', phone: '', email: '', requirement: '' });
            })
            .catch((error) => console.log('Error!', error.message));
    };


    return (<>
        <div className="main-contact">
            <div className="contactbg container">
                <h1>CONTACT US</h1>
                <p style={{ marginTop: "10px" }}><Link to="/">Home</Link>  » Contact Us </p>
            </div>
            <div className="contact-row container">
                <div className="contact-col">
                    <h3>Feel free to Connect </h3>
                    <p>Feel free to reach out throught contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive  to provide exceptional Products to Our Clients</p>
                    <ul>
                        <li>Total Supply Solutions Pvt. Ltd.</li>
                        <li>+91 9820939999</li>
                        <li><EmailIcon sx={{ color: "#3cb3db", marginRight: "10px" }} /><a href="mailto:sales@totalsupplysolutions.com" className="maito"> sales@totalsupplysolutions.com </a></li>
                        <li><CallIcon sx={{ color: "#3cb3db", marginRight: "10px" }} /><a href="mailto:totalsupplysolutions@gmail.com" className="maito">totalsupplysolutions@gmail.com</a></li>
                        <li><LocationOnIcon sx={{ color: "#3cb3db", marginRight: "10px" }} />C/101, Ambika Towers, Pump house <br /> Andheri East , Mumbai - 400093</li>
                        <li><a href=""><InstagramIcon sx={{ fontSize: "25px", background: "rgb(214, 41, 118)", color: "white" }} /></a>
                            <a href=""><FacebookIcon sx={{ fontSize: "25px", background: "#316FF6", marginLeft: "10px", color: "white" }} /></a>
                            <a href=""><X sx={{ fontSize: "25px", background: "#000000", marginLeft: "10px", color: "white" }} /></a>
                        </li>
                    </ul>
                </div>
                <div className="contact-col">
                    <form onSubmit={handleSubmit}>
                        <h3>Get a Quote <RequestQuoteIcon sx={{ color: "#3cb3db", fontSize: "30px", marginLeft: "10px" }} /></h3>
                        <label>Name:</label>
                        <input type="text" name="name" value={formdata.name} placeholder="Enter your name.." required onChange={handleChange} />
                        <label>Phone Number</label>
                        <input type="number" name="phone" value={formdata.phone} placeholder="Enter your mobile number.." required onChange={handleChange} />
                        <label>Email</label>
                        <input type="email" name="email" value={formdata.email} placeholder="Enter your email.." required onChange={handleChange} />
                        <label>Requirement</label>
                        <textarea name="requirement" value={formdata.requirement} rows="6" placeholder="Enter your requirement.." required onChange={handleChange}></textarea>
                        <button type="submit" className="btn" style={{ color: "white" }}>Submit <ArrowRightAltIcon sx={{ marginLeft: "10px" }} /></button>
                    </form>
                    {!submitted ? ('') :
                        <p style={{ color: "green" }}>Thank you for your submission!</p>}
                </div>
            </div>
        </div>
    </>)
}

export default ContactUs