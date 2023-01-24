import React from "react";
import dynamic from "next/dynamic";
import ArticleLayout from "../Common/ArticleLayout";
import posts from "../../sample-data/blog-posts/posts.json";
import Breadcrumb from "../Common/Breadcumb";
import Pagination from "../Common/Pagination";
import BlogSearch from "./BlogSearchSection";
import BlogSocial from "./BlogSocialSection";
import BlogCategory from "./BlogCategorySection";
import BlogSidebarPost from "./BlogSidebarPost";
import BlogTags from "./BlogTagsSection";
const Brand = dynamic(() => import("../Home/BrandSection"), {
  ssr: false,
});

const BlogMain = () => {
  return (
    <main>
      {/* breadcrumb-area-start */}
      <Breadcrumb pageTitle="Protección al Usuario" />
      {/* breadcrumb-area-end */}

      <section className="standard-blog-area pt-120 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              {posts &&
                posts.map((post, i) => (
                  <div key={i}>
                    <ArticleLayout post={post} />
                  </div>
                ))}

              <Pagination />
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

      {/* brand-area-start */}
      <Brand />
      {/* brand-area-end */}
    </main>
  );
};

export default BlogMain;
