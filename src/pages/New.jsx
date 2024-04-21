import React from 'react'

function New() {
    return (
        <div>
            <div className="search-wrapper section-padding-100">
                <div className="search-close">
                    <i className="fa fa-close" aria-hidden="true"></i>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="search-content">
                                <form action="#" method="get">
                                    <input type="search" name="search" id="search" placeholder="Type your keyword..." />
                                    <button type="submit"><img src="ASSETS/img/core-img/search.png" alt="" /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-content-wrapper d-flex clearfix">


                <div className="mobile-nav">

                    <div className="amado-navbar-brand">
                        <a href="index.html"><img src="ASSETS/img/core-img/logo.png" alt="" /></a>
                    </div>

                    <div className="amado-navbar-toggler">
                        <span></span><span></span><span></span>
                    </div>
                </div>


                <header className="header-area clearfix">

                    <div className="nav-close">
                        <i className="fa fa-close" aria-hidden="true"></i>
                    </div>

                    <div className="logo">
                        <a href="index.html"><img src="ASSETS/img/core-img/logo.png" alt="" /></a>
                    </div>

                    <nav className="amado-nav">
                        <ul>
                            <li className="active"><a href="index.html">Home</a></li>
                            <li><a href="shop.html">Shop</a></li>
                            <li><a href="product-details.html">Product</a></li>
                            <li><a href="cart.html">Cart</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                        </ul>
                    </nav>

                    <div className="amado-btn-group mt-30 mb-100">
                        <a href="#" className="btn amado-btn mb-15">%Discount%</a>
                        <a href="#" className="btn amado-btn active">New this week</a>
                    </div>

                    <div className="cart-fav-search mb-100">
                        <a href="cart.html" className="cart-nav"><img src="ASSETS/img/core-img/cart.png" alt="" /> Cart <span>(0)</span></a>
                        <a href="#" className="fav-nav"><img src="ASSETS/img/core-img/favorites.png" alt="" /> Favourite</a>
                        <a href="#" className="search-nav"><img src="ASSETS/img/core-img/search.png" alt="" /> Search</a>
                    </div>

                    <div className="social-info d-flex justify-content-between">
                        <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    </div>
                </header>

                <div className="products-catagories-area clearfix">
                    <div className="amado-pro-catagory clearfix">

                        <div className="single-products-catagory clearfix">
                            <a href="shop.html">
                                <img src="ASSETS/img/bg-img/1.jpg" alt="" />

                                <div className="hover-content">
                                    <div className="line"></div>
                                    <p>From $180</p>
                                    <h4>Modern Chair</h4>
                                </div>
                            </a>
                        </div>

                        <div className="single-products-catagory clearfix">
                            <a href="shop.html">
                                <img src="ASSETS/img/bg-img/2.jpg" alt="" />

                                <div className="hover-content">
                                    <div className="line"></div>
                                    <p>From $180</p>
                                    <h4>Minimalistic Plant Pot</h4>
                                </div>
                            </a>
                        </div>

                        <div className="single-products-catagory clearfix">
                            <a href="shop.html">
                                <img src="ASSETS/img/bg-img/3.jpg" alt="" />

                                <div className="hover-content">
                                    <div className="line"></div>
                                    <p>From $180</p>
                                    <h4>Modern Chair</h4>
                                </div>
                            </a>
                        </div>


                        <div className="single-products-catagory clearfix">
                            <a href="shop.html">
                                <img src="ASSETS/img/bg-img/4.jpg" alt="" />

                                <div className="hover-content">
                                    <div className="line"></div>
                                    <p>From $180</p>
                                    <h4>Night Stand</h4>
                                </div>
                            </a>
                        </div>


                        <div className="single-products-catagory clearfix">
                            <a href="shop.html">
                                <img src="ASSETS/img/bg-img/5.jpg" alt="" />

                                <div className="hover-content">
                                    <div className="line"></div>
                                    <p>From $18</p>
                                    <h4>Plant Pot</h4>
                                </div>
                            </a>
                        </div>


                        <div className="single-products-catagory clearfix">
                            <a href="shop.html">
                                <img src="ASSETS/img/bg-img/6.jpg" alt="" />

                                <div className="hover-content">
                                    <div className="line"></div>
                                    <p>From $320</p>
                                    <h4>Small Table</h4>
                                </div>
                            </a>
                        </div>


                        <div className="single-products-catagory clearfix">
                            <a href="shop.html">
                                <img src="ASSETS/img/bg-img/7.jpg" alt="" />

                                <div className="hover-content">
                                    <div className="line"></div>
                                    <p>From $318</p>
                                    <h4>Metallic Chair</h4>
                                </div>
                            </a>
                        </div>


                        <div className="single-products-catagory clearfix">
                            <a href="shop.html">
                                <img src="ASSETS/img/bg-img/8.jpg" alt="" />

                                <div className="hover-content">
                                    <div className="line"></div>
                                    <p>From $318</p>
                                    <h4>Modern Rocking Chair</h4>
                                </div>
                            </a>
                        </div>


                        <div className="single-products-catagory clearfix">
                            <a href="shop.html">
                                <img src="ASSETS/img/bg-img/9.jpg" alt="" />

                                <div className="hover-content">
                                    <div className="line"></div>
                                    <p>From $318</p>
                                    <h4>Home Deco</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <section className="newsletter-area section-padding-100-0">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-12 col-lg-6 col-xl-7">
                            <div className="newsletter-text mb-100">
                                <h2>Subscribe for a <span>25% Discount</span></h2>
                                <p>Nulla ac convallis lorem</p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 col-xl-5">
                            <div className="newsletter-form mb-100">
                                <form action="#" method="post">
                                    <input type="email" name="email" className="nl-email" placeholder="Your E-mail" />
                                    <input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default New
