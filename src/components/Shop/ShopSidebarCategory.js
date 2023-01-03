import React from 'react';
import Link from 'next/link';


const ShopSidebarCategory = () => {

    return (
        <div className="widget">
            <h4 className="sidebar-widget-title">Categories</h4>
            <ul className="sidebar-cat-list">
                <li><Link href="/shop"><a>Broadband</a></Link></li>
                <li><Link href="/shop"><a>Gaming Materials</a></Link></li>
                <li><Link href="/shop"><a>Connections</a></Link></li>
                <li><Link href="/shop"><a>High-speed Wi-Fi</a></Link></li>
                <li><Link href="/shop"><a>Satellite TV</a></Link></li>
                <li><Link href="/shop"><a>Streaming</a></Link></li>
                <li><Link href="/shop"><a>Un categorized</a></Link></li>
            </ul>
        </div>
    );
    
}

export default ShopSidebarCategory;