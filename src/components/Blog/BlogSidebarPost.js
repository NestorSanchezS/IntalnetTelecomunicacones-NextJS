import React from 'react';
import Link from 'next/link'

const BlogSidebarPost = () => {

    return (
        <div className="widget">
            <h4 className="sidebar-widget-title">Recent Posts</h4>
            <ul className="rc-post-list">
                <li>
                    <div className="rc-post-thumb">
                        <Link href="/blog-details"><a><img src="assets/img/blog/rc_post_thumb01.jpg" alt="img not found"/></a></Link>
                    </div>
                    <div className="rc-post-content">
                        <h6 className="title"><Link href="/blog-details"><a>Broadband Connection Needs To Everyone Life</a></Link></h6>
                        <span className="date">28 Feb 2022</span>
                    </div>
                </li>
                <li>
                    <div className="rc-post-thumb">
                        <Link href="/blog-details"><a><img src="assets/img/blog/rc_post_thumb02.jpg" alt="img not found"/></a></Link>
                    </div>
                    <div className="rc-post-content">
                        <h6 className="title"><Link href="/blog-details"><a>Why Businesses are Hybrid Network Approach</a></Link></h6>
                        <span className="date">28 Feb 2022</span>
                    </div>
                </li>
                <li>
                    <div className="rc-post-thumb">
                        <Link href="/blog-details"><a><img src="assets/img/blog/rc_post_thumb03.jpg" alt="img not found"/></a></Link>
                    </div>
                    <div className="rc-post-content">
                        <h6 className="title"><Link href="/blog-details"><a>Here to Put a Spring In Step This September</a></Link></h6>
                        <span className="date">28 Feb 2022</span>
                    </div>
                </li>
                <li>
                    <div className="rc-post-thumb">
                        <Link href="/blog-details"><a><img src="assets/img/blog/rc_post_thumb04.jpg" alt="img not found"/></a></Link>
                    </div>
                    <div className="rc-post-content">
                        <h6 className="title"><Link href="/blog-details"><a>Broadband Updates Network Capacity through Net</a></Link></h6>
                        <span className="date">28 Feb 2022</span>
                    </div>
                </li>
                <li>
                    <div className="rc-post-thumb">
                        <Link href="/blog-details"><a><img src="assets/img/blog/rc_post_thumb05.jpg" alt="img not found"/></a></Link>
                    </div>
                    <div className="rc-post-content">
                        <h6 className="title"><Link href="/blog-details"><a>Cuttlefish Memory Stays Sharper Than Humans</a></Link></h6>
                        <span className="date">28 Feb 2022</span>
                    </div>
                </li>
            </ul>
        </div>
    );
    
}

export default BlogSidebarPost;