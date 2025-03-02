import { React, useState, useEffect } from 'react';
import './Home.css';
import dark_arrow from '../../assets/images/dark-arrow.png';
import Title from '../title/Title';
import NUTS from '../../assets/images/NUTS.png';
import SCREW_BOLTS from '../../assets/images/SCREWS-BOLTS.png';
import WASHERS from '../../assets/images/WASHERS.png';
import Hero from '../hero/Hero';
import Fasteners from '../../assets/images/fastener.jpg';
import Automech from '../../assets/images/ourclient/automech.jpg';
import Avdel from '../../assets/images/ourclient/avdel.gif';
import Bhasker_genset from '../../assets/images/ourclient/bhasker-genset.jpg';
import Faber from '../../assets/images/ourclient/faber.jpg';
import Kala_genset from '../../assets/images/ourclient/kala-genset.jpg';
import Kruger from '../../assets/images/ourclient/kruger.jpg';
import Medha from '../../assets/images/ourclient/medha.jpg';
import Ram_ratan_p from '../../assets/images/ourclient/ram-ratna-parkon.jpg';
import Ram_ratan from '../../assets/images/ourclient/ram-ratna.jpg';
import Ram from '../../assets/images/ourclient/ram.jpg';
import Reliance from '../../assets/images/ourclient/reliance.jpg';
import Shakti from '../../assets/images/ourclient/shakti.jpg';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Link } from 'react-router-dom';

const Home = () => {

    const [detail, setDetail] = useState({
        bolts: {
            head: "SCREWS & BOLTS",
            para: "Screws and bolts are essential fasteners used in construction, manufacturing, and everyday applications. Screws have a helical ridge (thread) that allows them to be driven into materials, often without the need for a nut"
        },
        nuts: {
            head: "NUTS",
            para: "Nuts are essential fasteners that work in combination with bolts to securely join materials. Typically hexagonal in shape, nuts are threaded internally and are designed to mate with the threads of bolts."
        },
        washers: {
            head: "WASHERS",
            para: "Washers are thin, flat discs with a hole in the center, used in combination with bolts or screws to distribute load and prevent damage to surfaces."
        }
    });


    const [expcount, setExpount] = useState(0);

    useEffect(() => {
        if (expcount < 25) {
            const interval = setInterval(() => {
                setExpount(prevCount => prevCount + 1);
            }, 80); // Adjust the speed of increment here (100ms)
            return () => clearInterval(interval);
        }
    }, [expcount]);


    const [clientCount, setClientcount] = useState(0);
    useEffect(() => {
        if (clientCount < 100) {
            const interval = setInterval(() => {
                setClientcount(prevClientcount => prevClientcount + 1)
            }, 40);
            return () => clearInterval(interval);
        }
    }, [clientCount]);


    return (
        <>
            <Hero />
            <div className="section-1">
                <div className="container">
                    <div className="section-diagonal">
                        <div className="qualityhead ">
                            <h3>Delivering low lifecycle cost, safety & reliability</h3>
                        </div>
                        <div className="qualitydetail ">
                            <p>The quality and performance of our unique fastener solutions guarantee the lowest possible lifecycle costs as well as safety and reliability. When it comes to strength, fatigue and corrosion resistance, magnetic permeability and heat resistance – there is no better choice.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Title subTitle='Our Product' title='What we Supply' />
            <div className="section-2">
                <div className="container">
                    <div className="products">
                        <div className="subproducts">
                            <Link to="/product">
                                <img src={SCREW_BOLTS} className="subproducts-img" alt="" />
                                <div className="caption">
                                    <p>{detail.bolts.para}</p>
                                </div>
                                <h2>{detail.bolts.head}</h2>
                            </Link>
                        </div>
                        <div className="subproducts">
                            <Link to="/product">
                                <img src={NUTS} className="subproducts-img" alt="" />
                                <div className="caption">
                                    <p> {detail.nuts.para}</p>
                                </div>
                                <h2>{detail.nuts.head}</h2>
                            </Link>
                        </div>
                        <div className="subproducts">
                            <Link to="/product">
                                <img src={WASHERS} className="subproducts-img" alt="" />
                                <div className="caption">
                                    <p>{detail.washers.para}</p>
                                </div>
                                <h2>{detail.washers.head}</h2>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-3">
                <div className="container">
                    <h2 className='container-divider-title'>About Us</h2>
                    <div className="section-about">
                        <div className="detail">
                            <div className="about-detail-head">
                                <h3>Leading Suppliers of High-Quality Stainless Steel Fastener's in India</h3>
                            </div>
                            <div className="about-detail-para">
                                <p>
                                    TOTAL SUPPLY SOLUTIONS PVT LTD. Is a brain child of Mr.DARSHAN.P.SHAH who started the business to cater to the requirements of fasteners.with state of art technology
                                    promoted with the basic aim of the group to diversify their product range as well as to be a single point source of all types of fasteners and allied products It is impossible to think of any Engineering Application without Fasteners.
                                    The group is today known for its prompt service and quality. Fasteners of any type, size material, such as MS / SS / BRASS / ALUMINUM/COPPER / HIGH TENSILE etc. Style (head, thread and drive)
                                    such as Slotted / Philips / Combination / Posy Drive / Hex Socket etc. which match national and international standards and are designed to suit your specification and application. The group supplies fasteners and allied products as per customer’s requirements as well as various standards viz. BIS, DIN, BA, ISO.. <span><Link to="/about"><button className='btn'>More..</button></Link></span></p>
                            </div>
                        </div>
                        <div className="sec-image">
                            <img src={Fasteners} alt="TSSPL" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-4">
                <div className="section-4-bg">
                    <div className="tsspl-section">
                        <div className='card'>
                            <h2 className="count-display">{expcount}+</h2>
                            <p>Years of Experience</p>
                        </div>
                        <div className='card'>
                            <h2 className="count-display">{clientCount}+</h2>
                            <p>Clients</p>
                        </div>
                    </div>
                    <div className='makequot'>
                        <h2>call at <span style={{ color: "blue" }}> +91-9820939999 </span>to make a Quotation</h2>
                    </div>
                </div>
            </div>
            <div className='section-5'>
                <Title subTitle='Our Clients' />
                <div className='div-client container'>
                    <div className="client-side">
                        <div className="clients">
                            <img src={Reliance} alt="" />
                        </div>
                        <div className="clients">
                            <img src={Avdel} alt="" />
                        </div>
                        <div className="clients">
                            <img src={Bhasker_genset} alt="" />
                        </div>
                        <div className="clients">
                            <img src={Faber} alt="" />
                        </div>
                        <div className="clients">
                            <img src={Kala_genset} alt="" />
                        </div>
                        <div className="clients">
                            <img src={Kruger} alt="" />
                        </div>
                        <div className="clients">
                            <img src={Medha} alt="" />
                        </div>
                        <div className="clients">
                            <img src={Ram_ratan_p} alt="" />
                        </div>
                        <div className="clients">
                            <img src={Ram} alt="" />
                        </div>
                        <div className="clients">
                            <img src={Shakti} alt="" />
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Home