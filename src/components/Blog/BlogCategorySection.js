import React from 'react';
import Link from 'next/link';

const BlogCategory = () => {

    return (
        <div className="widget">
            <h4 className="sidebar-widget-title">Browse Category</h4>
            <ul className="sidebar-cat-list">
                <li><Link href="/blog-details"><a>All Categories <span>(252)</span></a></Link></li>
                <li><Link href="/blog-details"><a>Mouse <span>(58)</span></a></Link></li>
                <li><Link href="/blog-details"><a>Gear Box <span>(10)</span></a></Link></li>
                <li><Link href="/blog-details"><a>Hard Disk <span>(96)</span></a></Link></li>
                <li><Link href="/blog-details"><a>Looking Glass <span>(82)</span></a></Link></li>
                <li><Link href="/blog-details"><a>Monitor <span>(30)</span></a></Link></li>
                <li><Link href="/blog-details"><a>SSD <span>(10)</span></a></Link></li>
                <li><Link href="/blog-details"><a>Processor <span>(42)</span></a></Link></li>
            </ul>
        </div>
    );
    
}

export default BlogCategory;