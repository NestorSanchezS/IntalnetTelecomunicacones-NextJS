import React from 'react';
import Link from 'next/link'


const BlogComments = () => {

    return (
        <div className="blog-comments-wrap">
            <h4 className="title">3 Comments</h4>
            <ul className="blog-comment-list">
                <li className="blog-comment-item">
                    <div className="comment-avatar-thumb">
                        <img src="/assets/img/blog/comment_thumb01.jpg" alt="img not found"/>
                    </div>
                    <div className="comment-text">
                        <div className="comment-avatar-info">
                            <h4 className="title">Ronjit Chandra Ukil</h4>
                            <ul className="comment-meta">
                                <li>28 Feb 2022</li>
                                <li>10:21 am</li>
                            </ul>
                        </div>
                        <p>I believe everyone should have the opportunity to create the progress through the tech and develop the skills. Luxury home prices in Sydney declined for the first time. Across the world, our sports writers & arts critics.</p>
                        <Link href="/blog-details"><a className="comment-reply"><i className="fas fa-reply"></i> Reply</a></Link>
                    </div>
                </li>
                <li className="blog-comment-item children">
                    <div className="comment-avatar-thumb">
                        <img src="/assets/img/blog/comment_thumb02.jpg" alt="img not found"/>
                    </div>
                    <div className="comment-text">
                        <div className="comment-avatar-info">
                            <h4 className="title">Brushlee Banzin</h4>
                            <ul className="comment-meta">
                                <li>28 Feb 2022</li>
                                <li>10:21 am</li>
                            </ul>
                        </div>
                        <p>I believe everyone should have the opportunity to create the progress through the tech and develop the skills. Luxury home prices in Sydney declined for the first time. Across the world, our sports writers & arts critics.</p>
                        <Link href="/blog-details"><a className="comment-reply"><i className="fas fa-reply"></i> Reply</a></Link>
                    </div>
                </li>
                <li className="blog-comment-item">
                    <div className="comment-avatar-thumb">
                        <img src="/assets/img/blog/comment_thumb03.jpg" alt="img not found"/>
                    </div>
                    <div className="comment-text">
                        <div className="comment-avatar-info">
                            <h4 className="title">Hambark Rodrio</h4>
                            <ul className="comment-meta">
                                <li>28 Feb 2022</li>
                                <li>10:21 am</li>
                            </ul>
                        </div>
                        <p>I believe everyone should have the opportunity to create the progress through the tech and develop the skills. Luxury home prices in Sydney declined for the first time. Across the world, our sports writers & arts critics.</p>
                        <Link href="/blog-details"><a className="comment-reply"><i className="fas fa-reply"></i> Reply</a></Link>
                    </div>
                </li>
            </ul>
        </div>
    );
    
}

export default BlogComments;