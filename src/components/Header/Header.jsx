import React from 'react'
import { FaCartShopping, FaLocationDot, FaPhone } from "react-icons/fa6";
import { Link } from 'react-router-dom';


import "./header.css";

const Header = () => {
    return (
        <>
            <header className='header'>
                {/* TOP BAR SECTION START */}
                <section className='top-bar'>
                    <p className='text-center m-0'>Clifton Branch 03434900328 Delivery Timings: 3:15 pm - 12:30 am. Bahadurabad Branch 02134930328 Delivery Timings: 4:15pm - 1:30am</p>
                </section>
                {/* TOP BAR SECTION END */}

                {/* MAIN HEADER START */}
                <section className='row justify-content-between  main-header'>
                    {/* CONTACT SECTION */}
                    <div className="col-8 col-lg-5 order-last order-lg-0">
                        <div className="d-flex justify-content-end justify-content-lg-start align-items-center contacts ms-">
                            <button className='h-btn'>
                                <div className="icon">
                                    <FaLocationDot />
                                </div>
                                <div className='d-flex justify-content-center flex-column gap-0'>
                                    <span className='title'>Change Location</span>
                                    <span>Talwar 2</span>
                                </div>
                            </button>
                            <a href="#" className='h-btn'>
                                <div className="icon">
                                    <FaPhone />
                                </div>
                                <p className='title'>03434900328 </p>
                            </a>
                        </div>
                    </div>
                    {/* CONTACT SECTION END */}

                    {/* LOGO SECTION */}
                    <div className="col-2 order-first order-lg-0">
                        <div className="brand">
                            <Link to={"/"}>
                                <img src="./img/1623752946-21.webp" alt="Brand Logo" />
                            </Link>
                        </div>
                    </div>
                    {/* LOGO SECTION END */}
                    <div className="col-md-5  d-none d-lg-block  d-flex justify-content-end" >
                        <div className="cart ms-auto">
                            <Link to={"/cart"} className='cart-wrap'>
                                <span>0</span>
                                <FaCartShopping />
                            </Link>
                        </div>
                    </div>

                </section>
                {/* MAIN HEADER END */}

            </header>

        </>
    )
}

export default Header
