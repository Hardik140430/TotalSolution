import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <div className="main-about">
                <div className="aboutbg container">
                    <h1>ABOUT US</h1>
                    <p style={{ marginTop: "10px" }}><Link to="/">Home</Link>  » About Us </p>
                </div>
                <div className="about_section">
                    <div className="container">
                        <div className="about_columns">
                            <div className="about-column">
                                <div className="content">
                                    <h3>We are TSSPL</h3>
                                    <h2>TSSPL is known as the Supplier of strongest stainless steel bolt - providing optimal safety and reliability to fasteners in the most demanding of applications. Fasteners made to last forever.</h2>
                                    <p style={{marginTop:"30px"}}><strong><u> TOTAL SUPPLY SOLUTIONS PVT LTD </u></strong>
                                    . Is a brain child of &nbsp;
                                    <strong><u> Mr.DARSHAN.P.SHAH </u></strong> &nbsp;
                                    who started the business to cater to  the requirements of fasteners.with state of art technology promoted with the  basic aim of the group to diversify their product range as well as to be a  single point source of all types of fasteners and allied products It is  impossible to think of any Engineering Application without Fasteners. The group  is today known for its prompt service and quality. Fasteners of any type, size  material, such as 
                                    <strong> MS / SS / BRASS / ALUMINUM / COPPER / HIGH TENSILE </strong>
                                    etc. Style  (head, thread and drive) such as Slotted / Philips/ Combination/ Posy Drive/ Hex  Socket etc. which match national and international standards and are designed  to suit your specification and application. The group supplies fasteners and  allied products as per customer’s requirements as well as various standards  viz. BIS, DIN, BA, ISO etc. 
                                    </p>
                                    <h3>Our Motto</h3>
                                    <p>Provide Best Qualtiy Fasteners Which last forever.</p>                                    
                                    <p><span>The products are supplied as per the specification given by the customer or as per the various national & international standards. </span>
                                    <strong>TOTAL SUPPLY SOLUTIONS PVT LTD</strong> has tied up with several fasteners manufacturers whereas process like electroplating, heat treatment is out sourced as on today. Such processes are controlled by inward inspection of the material and vendor approval before dispatch. </p>
                                    <h3>Our Primary Object </h3>
                                    <p>The primary Objective of the Company is to meet your bulk requirement at short notice, we assure you of quick response, right quantity, rate competitiveness & Delivery timings which shall be better than your present suppliers. To ensure that we supply the best possible quality of fasteners to you. Our quality control department is equipped with highly accurate measurement and inspection devices and manned by capable engineers. This unbeatable combination ensures that we have total control over product quality right from Raw Material to the finished fasteners in a ready-to- use condition by you.</p>
                                    <h3>Quality Control</h3>
                                    <p>It is this constant concern for quality which has won for us orders as OEM supplier to companies operating in different Industrial Sectors. These companies are leaders and respected in industry circles for their high standards. A greater assurance and a better testimonial of our quality is the repeat orders that we receive for our fasteners from companies who are quality conscious in everything they use.</p>
                                    <h3>Mission</h3>
                                    <p>Our supplies shall help you to streamline your materials planning, inventory management, procurement program and production scheduling to suit your demand forecast. So, just think of the large savings you may achieve in working capital, interest cost and material carrying cost.  All these will help you either improve your margins or offer more competitive prices to your customers.</p>
                                    <p>We assure you that you will be happy from the day you appoint us to manage your supply chain, for fasteners you will notice a significant change. It would be our pleasure to serve your esteemed organization. So we request you to kindly include our name in your list of approved vendors for the supply of fasteners and send us your vendor registration form. We shall be happy to meet you with an appointment and discuss how we can build a reliable 
                                        <strong> TOTAL SUPPLY SOLUTIONS </strong> partnership with your organization.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;