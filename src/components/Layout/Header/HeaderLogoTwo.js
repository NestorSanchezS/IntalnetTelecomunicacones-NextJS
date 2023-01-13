import React, { Component } from 'react';
import Link from 'next/link';

const HeaderLogoTwo = () => {
    return (
        <div className="header-two-logo">
            <div className="container custom-container">
                <div className="path-logo">
                    <Link href="/"><a><img src="/assets/img/logo/fw_logo.png" alt="img not found"/></a></Link>
                </div>
            </div>
        </div>
    );
}

export default HeaderLogoTwo;