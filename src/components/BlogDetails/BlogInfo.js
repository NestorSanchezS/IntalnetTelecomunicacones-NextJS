import React from 'react';
import Link from 'next/link';

const BlogInfo = () => {

    return (
        <div>
            <div className="blog-details-bottom">
                <ul>
                    <li className="tags">
                        <span>Tags :</span>
                        <Link href="/blog-details"><a>Repair,</a></Link>
                        <Link href="/blog-details"><a>Car,</a></Link>
                        <Link href="/blog-details"><a>Computer,</a></Link>
                        <Link href="/blog-details"><a>Mobile</a></Link>
                    </li>
                    <li className="blog-like-dislike">
                        <a href="#"><i className="fal fa-thumbs-up"></i> Like</a>
                        <a href="#"><i className="fal fa-thumbs-down"></i> Dislike</a>
                    </li>
                    <li className="blog-share">
                        <span>Share :</span>
                        <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                        <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                        <a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a>   
                    </li>
                </ul>
            </div>
            <div className="next-prev-post-wrap">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="next-prev-post-item">
                            <span>Previous Article</span>
                            <h5 className="title">
                                <Link href="/blog-details"><a>What Do I Need to Make It in the World of Business?</a></Link>
                            </h5>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="next-prev-post-item text-end ms-auto">
                            <span>Next Article</span>
                            <h5 className="title">
                                <Link href="/blog-details"><a>If You Only Knew How Much Your Outfit Choices Actually Matter</a></Link>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default BlogInfo;