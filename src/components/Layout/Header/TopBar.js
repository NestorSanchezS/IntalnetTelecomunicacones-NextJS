import React from 'react';
import Link from 'next/link';

const TopHeader = () => {
    return (
        <div className="header-top-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-md-7 col-sm-7">
                        <div className="header-top-left">
                            <ul>
                                <li className="d-none d-xl-flex"><i className="flaticon-location"></i> 14/A, Queen Street City, New York, US</li>
                                <li className="d-none d-lg-flex"><i className="flaticon-email"></i> info@example.com</li>
                                <li><i className="flaticon-clock"></i> Opening Time : 10: AM - 10 PM</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-5 col-sm-5">
                        <div className="header-top-right">
                            <ul>
                                <li className="header-user-info">
                                    <i className="flaticon-businessman"></i>
                                    <Link href="/error"><a>Login / Register</a></Link>
                                </li>
                                <li className="header-social">
                                    <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                                    <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                                    <a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;