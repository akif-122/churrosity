import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";

import { FaMinus, FaPlus, FaTimes } from "react-icons/fa"

import "./productCard.css";

const ProductCard = (props) => {

    const [showModal , setShowModal] =  useState(false);

    const handleShowModal = ()=>{
        setShowModal(!showModal);
    }

    const hideModal = ()=>{
        setShowModal(false);
    }
    
    
    const { data } = props;
    return (
        <>


            {/* CARD START */}
            <div className="product-card my-3 h-100">
                <div className="product-img">
                    <img src={data?.img} width={"100%"} alt="Product img" />
                </div>

                <div className="product-text text-center ">
                    <h2>{data?.title}</h2>
                    <p>{data?.desc}</p>

                    <div className="cart-action-wrap">
                        <strong>{data?.price} </strong>
                        <button onClick={handleShowModal}>Add to Card <FaCartShopping /> </button>
                    </div>

                </div>

            </div>
            {/* CARD END */}


            {/* POPUP MODAL */}
            <div className={`modal-wrap ${showModal ? "d-flex" : "d-none"}`}>
                <div className="modal-inner">
                    <button className='close-modal' onClick={hideModal}>
                        <FaTimes />
                    </button>
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="modal-img">
                                <img src="./img/1648723355-sasasas (1).webp" width={"100%"} alt="" />

                            </div>
                        </div>

                        <div className="col-lg-7">


                            <div className="modal-text">
                                <h2>Family Box Of Happiness..</h2>
                                <div className="cart-detail">
                                    <h4>Rs. 200</h4>
                                    <p className='cart-d-para'>Assorted glaze churros with different topping options</p>

                                    {/* BOXES */}
                                    <div className="select-box">


                                        <label htmlFor="box-3" className='w-100'>
                                            <div className=" d-flex align-items-center justify-content-between w-100">
                                                <div className="d-flex align-items-center">
                                                    <input type="radio" id='box-3' name='boxx' />
                                                    <span className='m-0'>Box of 3</span>
                                                </div>
                                                <p className='item-price m-0'>Rs. 1200</p>
                                            </div>
                                        </label>

                                        <label htmlFor="box-6" className='w-100'>
                                            <div className=" d-flex align-items-center justify-content-between w-100">
                                                <div className="d-flex align-items-center">
                                                    <input type="radio" id='box-6' name='boxx' />
                                                    <span className='m-0'>Box of 6</span>
                                                </div>
                                                <p className='item-price m-0'>Rs. 1200</p>
                                            </div>
                                        </label>


                                    </div>
                                    {/* BOXS END */}

                                    <div className="item-header flex-wrap d-flex align-items-center justify-content-between">
                                        <h5>Select Your Desired Glaze Churros.</h5>
                                        <span>required</span>
                                    </div>

                                    {/* ITEMS  */}
                                    <div className="cart-items  ">

                                        {/* item */}
                                        <label htmlFor="1" className='w-100'>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <input type="checkbox" id='1' />
                                                    <span>Chocolate Glaze</span>
                                                </div>

                                                <div className="d-flex align-items-center">
                                                    <div className="item-img">
                                                        <img src="./img/1666074712-thumbnails 5.webp" alt="" />
                                                    </div>
                                                    <div className="buttons">
                                                        <div className="d-flex align-items-center">
                                                            <button className='desc-btn'>-</button>
                                                            <input type="text" defaultValue={0} />
                                                            <button className='inc-btn'>+</button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="">
                                                    <span>-</span>
                                                </div>

                                            </div>
                                        </label>
                                        {/* item end*/}

                                        {/* item */}
                                        <label htmlFor="2" className='w-100'>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <input type="checkbox" id='2' />
                                                    <span>Chocolate Glaze</span>
                                                </div>

                                                <div className="d-flex align-items-center">
                                                    <div className="item-img">
                                                        <img src="./img/1666074720-thumbnails 1.webp" alt="" />
                                                    </div>
                                                    <div className="buttons">
                                                        <div className="d-flex align-items-center">
                                                            <button className='desc-btn'>-</button>
                                                            <input type="text" defaultValue={0} />
                                                            <button className='inc-btn'>+</button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="">
                                                    <span>-</span>
                                                </div>

                                            </div>
                                        </label>
                                        {/* item end*/}

                                        {/* item */}
                                        <label htmlFor="3" className='w-100'>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <input type="checkbox" id='3' />
                                                    <span>Chocolate Glaze</span>
                                                </div>

                                                <div className="d-flex align-items-center">
                                                    <div className="item-img">
                                                        <img src="./img/1666074712-thumbnails 5.webp" alt="" />
                                                    </div>
                                                    <div className="buttons">
                                                        <div className="d-flex align-items-center">
                                                            <button className='desc-btn'>-</button>
                                                            <input type="text" defaultValue={0} />
                                                            <button className='inc-btn'>+</button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="">
                                                    <span>-</span>
                                                </div>

                                            </div>
                                        </label>
                                        {/* item end*/}

                                        {/* item */}
                                        <label htmlFor="4" className='w-100'>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <input type="checkbox" id='4' />
                                                    <span>Chocolate Glaze</span>
                                                </div>

                                                <div className="d-flex align-items-center">
                                                    <div className="item-img">
                                                        <img src="./img/1666074712-thumbnails 5.webp" alt="" />
                                                    </div>
                                                    <div className="buttons">
                                                        <div className="d-flex align-items-center">
                                                            <button className='desc-btn'>-</button>
                                                            <input type="text" defaultValue={0} />
                                                            <button className='inc-btn'>+</button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="">
                                                    <span>-</span>
                                                </div>

                                            </div>
                                        </label>
                                        {/* item end*/}




                                    </div>
                                    {/* ITEMS  END */}



                                </div>


                                <div className="cart-actionss d-flex align-items-center w-100">
                                    <div className="cart-btns">
                                        <button><FaMinus /></button>
                                        <input type="text" defaultValue={1} />
                                        <button className='inc-btn'><FaPlus /></button>
                                    </div>

                                    <button className='add-cart-btn'>Add to Cart - Rs. 200</button>

                                </div>


                            </div>

                        </div>

                    </div>
                </div>
            </div>
            {/* POPUP MODAL END */}





        </>
    )
}

export default ProductCard
