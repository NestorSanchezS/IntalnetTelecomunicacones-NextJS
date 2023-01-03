import React from 'react';
import BlogSearch from '../Blog/BlogSearchSection';
import BlogSocial from '../Blog/BlogSocialSection';
import BlogCategory from '../Blog/BlogCategorySection';
import BlogSidebarPost from '../Blog/BlogSidebarPost';
import BlogTags from '../Blog/BlogTagsSection';
import Breadcrumb from '../Common/Breadcumb';
import BlogInfo from './BlogInfo';
import BlogComments from './BlogComments';
import CommentForm from './CommentForm';
import Link from 'next/link';

const BlogDetailsMain = () => {

    return (

        <main>

            {/* breadcrumb-area-start */}
            <Breadcrumb pageTitle="Children Loves the Cartoons And Our New Channels"/>
            {/* breadcrumb-area-end */}

            {/* blog-area start */}
            <section className="blog-details-area pt-120 pb-50">
                <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="blog-details-thumb">
                            <img src="assets/img/blog/blog_details01.jpg" alt="img not found"/>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="blog-details-wrap">
                                <ul className="blog-post-meta">
                                    <li><i className="far fa-folder-open"></i> Network</li>
                                    <li><i className="flaticon-user"></i> <Link href="/blog-details"><a>Netbox</a></Link></li>
                                    <li><i className="flaticon-calendar"></i> 25 Feb 2022</li>
                                </ul>
                                <div className="standard-blog-content blog-details-content">
                                    <p>We pride ourselves on our breaking news stories, in-depth analysis and thoughtful opinion pieces. But it's not just the news desk that works round the clock. Across the world, our sports writers, arts critics, interviewers and science reporters are dedicated to bringing you the quality coverage.</p>
                                    <p>Our journalism is editorially independent, meaning we set our own agenda. No one edits our editor and no one steers our opinion. We are free from commercial bias and are not influenced by billionaire owners, politicians or shareholders. This independence matters because it enables us to challenge the powerful.</p>
                                    <blockquote>
                                        Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking -Steve Jobs
                                    </blockquote>
                                    <figure>
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-12 col-md-7">
                                                <div className="blog-details-img">
                                                    <img src="assets/img/blog/blog_details02.jpg" alt="img not found"/>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-12 col-md-5">
                                                <p>All kinds of laptop, desktop computer servicing center forIt is a long established fact.</p>
                                                <ul className="blog-details-list">
                                                    <li>Free Internet Connection</li>
                                                    <li>Serviced Properly</li>
                                                    <li>Highly Experienced Courtesy</li>
                                                    <li>Full-service for Broadband</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </figure>
                                    <p>We pride ourselves on our breaking news stories, in-depth analysis and thoughtful opinion pieces. But it's not just the news desk that works round the clock. Across the world, our sports writers, arts critics, interviewers and science reporters are dedicated to bringing you the quality coverage.</p>
                                    <p>Our journalism is editorially independent, meaning we set our own agenda. No one edits our editor and no one steers our opinion. We are free from commercial bias and are not influenced by billionaire owners, politicians or shareholders. This independence matters because it enables us to challenge the powerful.</p>
                                </div>
                                <BlogInfo />
                                <BlogComments />
                                <CommentForm />
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <aside className="blog-sidebar">
                                <BlogSearch />
                                <BlogSocial />
                                <BlogCategory />
                                <BlogSidebarPost />
                                <BlogTags />
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
            {/* blog-area end */}

        </main>

    );
    
}

export default BlogDetailsMain;


