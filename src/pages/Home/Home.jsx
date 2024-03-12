import React from 'react'

import "./home.css"

// OWL CAROUSEL
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// OWL CAROUSEL FILE END /

import TabsBar from '../../components/TabsBar/TabsBar'

import { FaArrowCircleRight, FaSearch, FaTimes } from "react-icons/fa"
import { FaMinus, FaPlus } from "react-icons/fa6";



import ProductCard from '../../components/ProductCard/ProductCard'
import { DiyKitData } from '../../components/DiyKitData'
import { SpecialOfferData } from '../../components/SpecialOfferData'
import { ExlusiveComboData } from '../../helpers/ExlusiveComboData'
import { OriginalChurrosData } from '../../helpers/OriginalChurrosData'
import { IceChurrosData } from '../../helpers/IceChurrosData'
import { GlazedChurrosData } from '../../helpers/GlazedChurrosData'
import { FillingChurrosData } from '../../helpers/FillingChurrosData'
import { ChuroHotDogData } from '../../helpers/ChuroHotDogData'
import { FriesData } from '../../helpers/FriesData'
import { IceCreamShakeData } from '../../helpers/IceCreamShakeData'
import { HotBeverageData } from '../../helpers/HotBeverageData'

const Home = () => {

    const handleCart = ()=>{
        document.getElementById("cart").classList.toggle("active")
    }
    
    const hideCart = () => {
        document.getElementById("cart").classList.remove("active")
    }

    return (
        <>
            
            {/* BOTTOM CART OPENER SECTION */}
                <div className="btm-cart-opener">
                    <div onClick={handleCart} className="cart-opener-wrap  d-flex align-items-center justify-content-around">
                        <div className="count">
                            0
                        </div>

                        <h2>View Cart</h2>

                        <h2>Rs 2447</h2>
                        
                    </div>
                </div>
            {/* BOTTOM CART OPENER SECTION END */}

            {/* CART SECTION START */}
            <div className="cart-side" id='cart'>
                <div className="cart-close-btn" onClick={hideCart}>
                    <button><FaTimes /></button>
                </div>
                <div className="cart-header d-flex align-items-center justify-content-between">
                    <h3>Your Cart</h3>
                    <button>Clear Cart</button>
                </div>

                <div className="cart-items">

                    {/* ITEM */}
                    <div className="cart-item">
                        <div className="product-item d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <img src="./img/1607601331-2 (1).webp" alt="" />
                                <h4>Chocolate</h4>
                            </div>

                            <div className="cart-action text-end">
                                <span>Rs. 500</span>
                                <div className="items-btn d-flex align-items-center">
                                    <button><FaMinus /></button>
                                    <input type="tel" defaultValue={1} className='qnty' />
                                    <button><FaPlus /></button>
                                </div>
                            </div>

                        </div>

                        {/* EXTRA ITEM */}
                        <div className="extra-items">
                            <div className="p-item d-flex align-items-center justify-content-between">
                                <p>+ Chocolate</p>
                                <p>Rs. 100</p>
                            </div>
                        </div>
                        {/* EXTRA ITEM END*/}

                    </div>
                    {/* ITEM END */}

                    {/* ITEM */}
                    <div className="cart-item">
                        <div className="product-item d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <img src="./img/1648825602-ice-choco-paradise (1).webp" alt="" />
                                <h4>Ice Choco Paradise</h4>
                            </div>

                            <div className="cart-action text-end">
                                <span>Rs. 500</span>
                                <div className="items-btn d-flex align-items-center">
                                    <button><FaMinus /></button>
                                    <input type="tel" className='qnty' defaultValue={1} />
                                    <button><FaPlus /></button>
                                </div>
                            </div>

                        </div>

                        {/* EXTRA ITEM */}
                        <div className="extra-items">
                            <div className="p-item d-flex align-items-center justify-content-between">
                                <p>+ Froot Loops</p>
                                <p>Rs. 68</p>
                            </div>
                            <div className="p-item d-flex align-items-center justify-content-between">
                                <p>+ Coconut</p>
                                <p>Rs. 80</p>
                            </div>
                        </div>
                        {/* EXTRA ITEM  END*/}

                    </div>
                    {/* ITEM END */}


                </div>

                {/* ADD MORE CAROUSEL SLIDER */}
                <div className="slider">
                    <h4>You can also add</h4>
                    <OwlCarousel className='owl-theme' dots={false} stagePadding={30} items={1} margin={10} nav>
                        <div class='item'>
                            <div className="d-flex add-item ">
                                <img src="./img/1637078869-hot-chocolate (1).webp" alt="" />
                                <div className="add-item-text w-100">
                                    <h5>Hot chocolate </h5>
                                    <p>Hot Beverages</p>

                                    <span>Rs. 398</span>
                                    <div className="act-btn">
                                        <button><FaPlus /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <div class='item'>
                            <div className="d-flex add-item ">
                                <img src="./img/1637078869-hot-chocolate (1).webp" alt="" />
                                <div className="add-item-text w-100">
                                    <h5>Hot chocolate </h5>
                                    <p>Hot Beverages</p>

                                    <span>Rs. 398</span>
                                    <div className="act-btn">
                                        <button><FaPlus /></button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class='item'>
                            <div className="d-flex add-item ">
                                <img src="./img/1637078869-hot-chocolate (1).webp" alt="" />
                                <div className="add-item-text w-100">
                                    <h5>Hot chocolate </h5>
                                    <p>Hot Beverages</p>

                                    <span>Rs. 398</span>
                                    <div className="act-btn">
                                        <button><FaPlus /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                    </OwlCarousel>
                </div>
                {/* CAROUSEL SLIDER END */}

                {/* CALCULATION OF TOTAL */}
                <div className="calculation">

                    <div className="d-flex align-items-center justify-content-between">
                        <p>Total</p>
                        <p className='text-end'>Rs.2166</p>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <p>Tax13%</p>
                        <p className='text-end'>Rs. 282</p>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <p>Delivery Fee</p>
                        <p className='text-end'>Rs. 200</p>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <p className='fw-bold'>Grand Total</p>
                        <p className='fw-bold text-end'>Rs.2647</p>
                    </div>


                </div>
                {/* CALCULATION OF TOTAL END */}

                {/* CHECKOUT BUTTON */}
                <div className="check-out">
                    <button className='check-out-btn'>Checkout <span><FaArrowCircleRight /></span></button>
                </div>

            </div>
            {/* CART SECTION END */}


            {/* Hero section start */}
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./img/1692187505-header-1.webp" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="./img/1692187511-header-2.webp" class="d-block w-100" alt="..." />
                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            {/* Hero section end */}

            {/* TAB SECTION */}
            <section className='tabs-section'>
                <TabsBar />

            </section>
            {/* TAB SECTION END */}

            {/* SEARCH SECTION START */}
            <section className='search-section'>
                <div className="container">
                    <div className="search-wrap">
                        <input type="search" name='search' id='search-input' />
                        <span>
                            <FaSearch />
                        </span>
                    </div>
                </div>
            </section>
            {/* SEARCH SECTION END */}


            {/* CATEGORY 1 SECTION START */}
            <section className='category-item'>
                {/* SPECIAL OFFER */}
                <div className="container">
                    <div className="category-img">
                        <img src="./img/1639466070-so.webp" alt="Category image" width={"100%"} />
                    </div>

                    <div className="row">

                        {
                            SpecialOfferData.map((item, index) => (
                                <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                                    <ProductCard data={item} />
                                </div>
                            ))
                        }


                    </div>


                </div>
                {/* SPECIAL OFFER */}

            </section>
            {/* CATEGORY 1 SECTION END */}


            {/* CATEGORY 2 SECTION START */}
            <section className='category-item'>
                {/* DIY KIT */}
                <div className="container">
                    <div className="category-img">
                        <img src="./img/1665396413-category.webp" alt="Category image" width={"100%"} />
                    </div>

                    <div className="row">
                        {
                            DiyKitData.map((item, index) => (
                                <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                                    <ProductCard data={item} />
                                </div>
                            ))
                        }

                    </div>


                </div>
                {/* DIY KIT */}

            </section>
            {/* CATEGORY 2 SECTION END */}

            {/* CATEGORY 3 SECTION START */}
            <section className='category-item'>
                {/* EXLUSIVE COMBO */}
                <div className="container">
                    <div className="category-img">
                        <img src="./img/1621843092-520x100-exclusive-combos.webp" alt="Category image" width={"100%"} />
                    </div>

                    <div className="row ">
                        {
                            ExlusiveComboData.map((item) => (
                                <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                                    <ProductCard data={item} />
                                </div>
                            ))
                        }

                    </div>


                </div>
                {/* EXLUSIVE COMBO */}

            </section>
            {/* CATEGORY 3 SECTION END */}

            {/* CATEGORY 4 SECTION START */}
            <section className='category-item'>
                {/* ORIGNAL CHURROS */}
                <div className="container">
                    <div className="category-img">
                        <img src="./img/1621843180-520x100-original-churros.webp" alt="Category image" width={"100%"} />
                    </div>

                    <div className="row">
                        {
                            OriginalChurrosData.map((item) => (
                                <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                                    <ProductCard data={item} />
                                </div>
                            ))
                        }

                    </div>


                </div>
                {/* ORIGNAL CHURROS */}

            </section>
            {/* CATEGORY 4 SECTION END */}

            {/* CATEGORY 5 SECTION START */}
            <section className='category-item'>
                {/* ICE CHURROS */}
                <div className="container">
                    <div className="category-img">
                        <img src="./img/1621843018-520x100-ice-churros.webp" alt="Category image" width={"100%"} />
                    </div>

                    <div className="row">
                        {
                            IceChurrosData.map((item) => (
                                <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                                    <ProductCard data={item} />
                                </div>
                            ))
                        }

                    </div>


                </div>
                {/* ICE CHURROS */}

            </section>
            {/* CATEGORY 5 SECTION END */}

            {/* CATEGORY 6 SECTION START */}
            <section className='category-item'>
                {/* GLAZED CHURROS */}
                <div className="container">
                    <div className="category-img">
                        <img src="./img/1621843018-520x100-ice-churros.webp" alt="Category image" width={"100%"} />
                    </div>

                    <div className="row">
                        {
                            GlazedChurrosData.map((item) => (
                                <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                                    <ProductCard data={item} />
                                </div>
                            ))
                        }

                    </div>


                </div>
                {/* GLAZED CHURROS */}

            </section>

            {/* CATEGORY 6 SECTION END */}



            {/* CATEGORY 7 SECTION START */}
            <section className='category-item'>
                {/* FILLING CHURROS */}
                <div className="container">
                    <div className="category-img">
                        <img src="./img/1621843167-520x100-filling-churros.webp" alt="Category image" width={"100%"} />
                    </div>

                    <div className="row">
                        {
                            FillingChurrosData.map((item) => (
                                <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                                    <ProductCard data={item} />
                                </div>
                            ))
                        }

                    </div>


                </div>
                {/* FILLING CHURROS */}

            </section>
            {/* CATEGORY 7 SECTION END */}


            {/* CATEGORY 8 SECTION START */}
            <section className='category-item'>
                {/* CHURRO HOT DOG */}
                <div className="container">
                    <div className="category-img">
                        <img src="./img/1621843111-520x100-tje-churro-hotdog.webp" alt="Category image" width={"100%"} />
                    </div>

                    <div className="row">
                        {
                            ChuroHotDogData.map((item) => (
                                <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                                    <ProductCard data={item} />
                                </div>
                            ))
                        }

                    </div>


                </div>
                {/* CHURRO HOT DOG END */}

            </section>
            {/* CATEGORY 8 SECTION END */}


            {/* CATEGORY 9 SECTION START */}
            <section className='category-item'>
                {/* FRIES */}
                <div className="container">
                    <div className="category-img">
                        <img src="./img/1621843099-fries.webp" alt="Category image" width={"100%"} />
                    </div>

                    <div className="row">
                        {
                            FriesData.map((item) => (
                                <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                                    <ProductCard data={item} />
                                </div>
                            ))
                        }

                    </div>


                </div>
                {/* FRIES END */}

            </section>
            {/* CATEGORY 9 SECTION END */}


            {/* CATEGORY 10 SECTION START */}
            <section className='category-item'>
                {/* ICE CREAM SHAKES */}
                <div className="container">
                    <div className="category-img">
                        <img src="./img/1621843062-520x100-icecrem-shakes.webp" alt="Category image" width={"100%"} />
                    </div>

                    <div className="row">
                        {
                            IceCreamShakeData.map((item) => (
                                <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                                    <ProductCard data={item} />
                                </div>
                            ))
                        }

                    </div>


                </div>
                {/* ICE CREAM SHAKES */}

            </section>
            {/* CATEGORY 10 SECTION END */}


            {/* CATEGORY 11 SECTION START */}
            <section className='category-item'>
                {/* HOT BEVERAGE */}
                <div className="container">
                    <div className="category-img">
                        <img src="./img/1621843072-520x100-hot-beverages.webp" alt="Category image" width={"100%"} />
                    </div>

                    <div className="row">
                        {
                            HotBeverageData.map((item) => (
                                <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                                    <ProductCard data={item} />
                                </div>
                            ))
                        }

                    </div>


                </div>
                {/* HOT BEVERAGE */}

            </section>
            {/* CATEGORY 11 SECTION END */}


            {/* TEXT */}
            <section className='btm-text'>
                <div className="container">
                    <p>Fix your dessert craving on the go with the best churros in town. Hot and crunchy, offering a variety of flavors including chocolate, Oreo, Crunchy nuts and a lot more - now delivering all over Karachi. <br /> Order now and enjoy the tastiest churros in K-town! </p>
                </div>

            </section>




        </>
    )
}

export default Home
