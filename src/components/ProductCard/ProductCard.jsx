import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

import "./productCard.css";

const ProductCard = (props) => {
    const { data } = props;
    return (
        <>
            <div className="product-card my-3 h-100">
                <div className="product-img">
                    <img src={data?.img} width={"100%"} alt="Product img" />
                </div>

                <div className="product-text text-center ">
                    <h2>{data?.title}</h2>
                    <p>{data?.desc}</p>

                    <div className="cart-action-wrap">
                        <strong>{data?.price} </strong>
                        <button>Add to Card <FaCartShopping /> </button>
                    </div>

                </div>

            </div>

        </>
    )
}

export default ProductCard
