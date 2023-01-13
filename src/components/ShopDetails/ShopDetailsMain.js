import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Breadcrumb from '../Common/Breadcumb';
import ProductDescTab from '../Elements/Tab/ProductDescTab';
import Link from 'next/link';
const Brand = dynamic(() => import('../Home/BrandSection'), {
    ssr: false
})
const ProductSlider = dynamic(() => import('../Elements/Slider/RelatedProductSlider'), {
    ssr: false
})

const ShopDetailsMain = () => {

    const [count, setCount] = useState(0);
    const handleIncrease = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleDecrease = () => {
        const newCount = count - 1;
        setCount(newCount)
    }

    return (
        <main>

            {/* breadcrumb-area-start */}
            <Breadcrumb pageTitle="Shop Details"/>
            {/* breadcrumb-area-end */}

            {/* shopdetails-area-start */}
            <section className="shop-details-area pt-120 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="shop-details-img">
                                <img src="/assets/img/products/shop_details01.png" alt="img not found"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shop-details-content">
                                <div className="product-stock-status">
                                    <span>In Stock</span>
                                </div>
                                <h2 className="title">Netbox Dual Band Whole Home Stan Mesh Wi-Fi Router</h2>
                                <div className="shop-rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h3 className="price"><sup>$</sup>55.00</h3>
                                <p>Yes! You'll be able to use your T-Mobile Home Internet to connect your computer, phone, and numerous other devices. Gauge your students’ skill level with the initial test and follow their progress.</p>
                                <div className="shop-details-quantity">
                                    <div className="cart-plus-minus">
                                        <div className="quantity-form">
                                            <p>{count}</p>
                                            <div className="qtybutton-box">
                                                <span className="plus" onClick={handleIncrease}><i className="fas fa-caret-up"></i></span>
                                                <span className="minus dis" onClick={handleDecrease}><i className="fas fa-caret-down"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="/shop-details"><a className="btn cart-btn">Add to cart</a></Link>
                                </div>
                                <div className="shop-details-bottom">
                                    <ul>
                                        <li className="sd-category"><span className="title">Categories :</span><Link href="/shop"><a>Router</a></Link></li>
                                        <li className="sd-tags">
                                            <span className="title">Tags :</span>
                                            <Link href="/shop"><a>Router,</a></Link>
                                            <Link href="/shop"><a>Broadband,</a></Link>
                                            <Link href="/shop"><a>Satellite TV,</a></Link>
                                            <Link href="/shop"><a>Streaming</a></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ProductDescTab />
                        </div>
                    </div>
                    <div className="related-products-wrap">
                        <h2 className="related-products-title">Related Products</h2>
                        <ProductSlider />
                    </div>
                </div>
            </section>
            {/* shopdetails-area-end */}

            {/* brand-area-start */}
            <Brand />
            {/* brand-area-end */}

        </main>
    );
};

export default ShopDetailsMain;