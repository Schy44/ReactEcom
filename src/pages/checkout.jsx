import React from "react";

const CheckoutPage = () => {
    return (
        <>
            {/* Search Wrapper Area Start */}
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
                                    <button type="submit"><img src="img/core-img/search.png" alt="" /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Search Wrapper Area End */}

            {/* Main Content Wrapper Start */}
            <div className="main-content-wrapper d-flex clearfix">

                {/* Mobile Nav (max width 767px)*/}
                <div className="mobile-nav">
                    {/* Navbar Brand */}
                    <div className="amado-navbar-brand">
                        <a href="index.html"><img src="img/core-img/logo.png" alt="" /></a>
                    </div>
                    {/* Navbar Toggler */}
                    <div className="amado-navbar-toggler">
                        <span></span><span></span><span></span>
                    </div>
                </div>

                {/* Header Area Start */}
                <header className="header-area clearfix">
                    {/* Close Icon */}
                    <div className="nav-close">
                        <i className="fa fa-close" aria-hidden="true"></i>
                    </div>
                    {/* Logo */}
                    <div className="logo">
                        <a href="index.html"><img src="img/core-img/logo.png" alt="" /></a>
                    </div>
                    {/* Amado Nav */}
                    <nav className="amado-nav">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="shop.html">Shop</a></li>
                            <li><a href="product-details.html">Product</a></li>
                            <li><a href="cart.html">Cart</a></li>
                            <li className="active"><a href="checkout.html">Checkout</a></li>
                        </ul>
                    </nav>
                    {/* Button Group */}
                    <div className="amado-btn-group mt-30 mb-100">
                        <a href="#" className="btn amado-btn mb-15">%Discount%</a>
                        <a href="#" className="btn amado-btn active">New this week</a>
                    </div>
                    {/* Cart Menu */}
                    <div className="cart-fav-search mb-100">
                        <a href="cart.html" className="cart-nav"><img src="img/core-img/cart.png" alt="" /> Cart <span>(0)</span></a>
                        <a href="#" className="fav-nav"><img src="img/core-img/favorites.png" alt="" /> Favourite</a>
                        <a href="#" className="search-nav"><img src="img/core-img/search.png" alt="" /> Search</a>
                    </div>
                    {/* Social Button */}
                    <div className="social-info d-flex justify-content-between">
                        <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    </div>
                </header>
                {/* Header Area End */}

                <div className="cart-table-area section-padding-100">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-lg-8">
                                <div className="checkout_details_area mt-50 clearfix">

                                    <div className="cart-title">
                                        <h2>Checkout</h2>
                                    </div>

                                    <form action="#" method="post">
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <input type="text" className="form-control" id="first_name" value="" placeholder="First Name" required />
                                            </div>
                                            {/* Add other form fields here */}
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="cart-summary">
                                    <h5>Cart Total</h5>
                                    <ul className="summary-table">
                                        <li><span>subtotal:</span> <span>$140.00</span></li>
                                        <li><span>delivery:</span> <span>Free</span></li>
                                        <li><span>total:</span> <span>$140.00</span></li>
                                    </ul>

                                    <div className="payment-method">
                                        {/* Add payment methods here */}
                                    </div>

                                    <div className="cart-btn mt-100">
                                        <a href="#" className="btn amado-btn w-100">Checkout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Content Wrapper End */}

            {/* Newsletter Area Start */}
            <section className="newsletter-area section-padding-100-0">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Newsletter Text */}
                        <div className="col-12 col-lg-6 col-xl-7">
                            <div className="newsletter-text mb-100">
                                <h2>Subscribe for a <span>25% Discount</span></h2>
                                <p>Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit amet mi vulputate consectetur. Donec auctor interdum purus, ac finibus massa bibendum nec.</p>
                            </div>
                        </div>
                        {/* Newsletter Form */}
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
            {/* Newsletter Area End */}
        </>
    );
}

export default CheckoutPage;
