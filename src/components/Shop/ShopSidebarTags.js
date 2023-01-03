import React from 'react';
import Link from 'next/link';

const ShopSidebarTags = () => {

    return (
        <div className="widget">
            <h4 className="sidebar-widget-title">Product Tags</h4>
            <ul className="sidebar-tag-list">
                <li><Link href="/shop"><a>#media</a></Link></li>
                <li><Link href="/shop"><a>#internet</a></Link></li>
                <li><Link href="/shop"><a>#Wi-Fi</a></Link></li>
                <li><Link href="/shop"><a>#network</a></Link></li>
                <li><Link href="/shop"><a>#package</a></Link></li>
                <li><Link href="/shop"><a>#mbps</a></Link></li>
                <li><Link href="/shop"><a>#visual reality</a></Link></li>
                <li><Link href="/shop"><a>#bundle</a></Link></li>
            </ul>
        </div>
    );
    
}

export default ShopSidebarTags;