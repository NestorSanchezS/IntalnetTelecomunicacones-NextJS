import React from 'react';
import Link from 'next/link'

const BlogTags = () => {

    return (
        <div className="widget">
            <h4 className="sidebar-widget-title">Popular Tags</h4>
            <ul className="sidebar-tag-list">
                <li><Link href="/blog-details"><a>Business</a></Link></li>
                <li><Link href="/blog-details"><a>Mobile</a></Link></li>
                <li><Link href="/blog-details"><a>Phone</a></Link></li>
                <li><Link href="/blog-details"><a>Financial</a></Link></li>
                <li><Link href="/blog-details"><a>Web Designs</a></Link></li>
                <li><Link href="/blog-details"><a>Repair</a></Link></li>
                <li><Link href="/blog-details"><a>UI/UX Research</a></Link></li>
                <li><Link href="/blog-details"><a>Branding</a></Link></li>
                <li><Link href="/blog-details"><a>Truck Repair</a></Link></li>
                <li><Link href="/blog-details"><a>Web Plans</a></Link></li>
            </ul>
        </div>
    );
    
}

export default BlogTags;