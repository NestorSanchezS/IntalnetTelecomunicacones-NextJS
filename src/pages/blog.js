import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import BlogMain from '../components/Blog/BlogMain';

const BlogPage = () => {
    return (
        <React.Fragment>
            <Header />
            <BlogMain />
            <Footer />
        </React.Fragment>
    );
};

export default BlogPage;
