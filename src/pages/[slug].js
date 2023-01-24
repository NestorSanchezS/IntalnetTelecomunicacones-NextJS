import React from "react";
import dynamic from "next/dynamic";
import BlogDetailsMain from "../components/BlogDetails/BlogDetailsMain";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import ErrorPage from "./error";
const Brand = dynamic(() => import("../components/Home/BrandSection"), {
  ssr: false,
});

const BlogDetails = () => {
  return (
    <React.Fragment>
      <main>
        <ErrorPage />
        <Brand />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default BlogDetails;
