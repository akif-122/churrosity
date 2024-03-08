import React from 'react'

import "./home.css"


import TabsBar from '../../components/TabsBar/TabsBar'

import { FaSearch } from "react-icons/fa"


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
    return (
        <>
            



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

                    <div className="row">
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
