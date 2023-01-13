import React from 'react';
import Link from 'next/link';

const Blog = () => {

    return (
        <section className="blog-area pt-110">
            <div className="container">
                <div className="row align-items-end justify-content-between mb-60">
                    <div className="col-xl-5 col-lg-6 col-md-8">
                        <div className="section-title">
                            <h2 className="title">Read Our Recent Blog Posts</h2>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4">
                        <div className="section-title-btn text-start text-md-end">
                            <Link href="/blog"><a className="btn transparent-btn">Read all posts</a></Link>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-9">
                        <div className="blog-post-item mb-50 wow fadeInUp" data-wow-delay=".2s">
                            <div className="blog-post-thumb">
                                <Link href="/blog-details"><a><img src="/assets/img/blog/blog_thumb01.jpg" alt="img not found"/></a></Link>
                            </div>
                            <div className="blog-post-content">
                                <ul className="blog-post-meta">
                                    <li><i className="far fa-folder-open"></i> Network</li>
                                    <li><i className="flaticon-businessman"></i> <Link href="/blog"><a>Netbox</a></Link></li>
                                    <li><i className="flaticon-calendar"></i> 20 Jan 2022</li>
                                </ul>
                                <h3 className="title"><Link href="/blog-details"><a>Children Loves the Cartoons And Our New Channels</a></Link></h3>
                                <Link href="/blog-details"><a className="btn transparent-btn">Read More</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-9">
                        <div className="blog-post-item mb-50 wow fadeInUp" data-wow-delay=".4s">
                            <div className="blog-post-thumb">
                                <Link href="/blog-details"><a><img src="/assets/img/blog/blog_thumb02.jpg" alt="img not found"/></a></Link>
                            </div>
                            <div className="blog-post-content">
                                <ul className="blog-post-meta">
                                    <li><i className="far fa-folder-open"></i> Network</li>
                                    <li><i className="flaticon-businessman"></i> <Link href="/blog"><a>Netbox</a></Link></li>
                                    <li><i className="flaticon-calendar"></i> 20 Jan 2022</li>
                                </ul>
                                <h3 className="title"><Link href="/blog-details"><a>Broadband May Disconnect in July Cause of Electricity Issues</a></Link></h3>
                                <Link href="/blog-details"><a className="btn transparent-btn">Read More</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-9">
                        <div className="blog-post-item mb-50 wow fadeInUp" data-wow-delay=".6s">
                            <div className="blog-post-thumb">
                                <Link href="/blog-details"><a><img src="/assets/img/blog/blog_thumb03.jpg" alt="img not found"/></a></Link>
                            </div>
                            <div className="blog-post-content">
                                <ul className="blog-post-meta">
                                    <li><i className="far fa-folder-open"></i> Network</li>
                                    <li><i className="flaticon-businessman"></i> <Link href="/blog"><a>Netbox</a></Link></li>
                                    <li><i className="flaticon-calendar"></i> 20 Jan 2022</li>
                                </ul>
                                <h3 className="title"><Link href="/blog-details"><a>We Newly Added Some International Comedy Channels</a></Link></h3>
                                <Link href="/blog-details"><a className="btn transparent-btn">Read More</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    
}

export default Blog;