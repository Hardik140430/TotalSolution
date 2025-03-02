import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/images/dark-arrow.png';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className='hero container'> 
        <div className="hero-text">
            <h1>Precision Fasteners for Every Industry - Reliable, Durable, and High-Quality Solutions</h1>
            <p>"At TSSPL, we specialize in manufacturing top-quality fasteners designed to meet the demands of various industries. Our commitment to precision and durability ensures that every product delivers exceptional performance and reliability."</p>
           <Link to="/contact"> <button className='btn'>Contact <img src={dark_arrow} alt="" /> </button></Link>
        </div>
        
    </div>
  )
}

export default Hero