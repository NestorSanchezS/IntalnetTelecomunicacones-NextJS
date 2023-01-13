import React from 'react';
import Link from 'next/link';

const ShoppingCart = () => {
    return (
        <ul className="minicart">
            <li className="d-flex align-items-start">
                <div className="cart-img">
                    <Link href="/shop-details"><a><img src="/assets/img/products/cart_p01.jpg" alt="img not found"/></a></Link>
                </div>
                <div className="cart-content">
                    <h4><Link href="/shop-details"><a>Gigabyte Dual Band Wi-Fi Router</a></Link></h4>
                    <div className="cart-price">
                        <span className="new">$229.9</span>
                        <span><del>$229.9</del></span>
                    </div>
                </div>
                <div className="del-icon">
                    <a href="#"><i className="far fa-trash-alt"></i></a>
                </div>
            </li>
            <li className="d-flex align-items-start">
                <div className="cart-img">
                    <Link href="/shop-details"><a><img src="/assets/img/products/cart_p02.jpg" alt="img not found"/></a></Link>
                </div>
                <div className="cart-content">
                    <h4><Link href="/shop-details"><a>Netbox Dual Whole TV Box System</a></Link></h4>
                    <div className="cart-price">
                        <span className="new">$229.9</span>
                        <span><del>$229.9</del></span>
                    </div>
                </div>
                <div className="del-icon">
                    <a href="#"><i className="far fa-trash-alt"></i></a>
                </div>
            </li>
            <li>
                <div className="total-price">
                    <span className="f-left">Total:</span>
                    <span className="f-right">$239.9</span>
                </div>
            </li>
            <li>
                <div className="checkout-link">
                    <a href="#">Shopping Cart</a>
                    <a className="black-color" href="#">Checkout</a>
                </div>
            </li>
        </ul>
    );
}

export default ShoppingCart;