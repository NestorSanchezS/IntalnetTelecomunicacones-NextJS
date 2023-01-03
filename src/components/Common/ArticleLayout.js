import React from 'react';
import Link from 'next/link';

const ArticleLayout = ({ post }) => {

  return (
      <article className="standard-blog-item mb-40">
        <div className="standard-post-thumb">
            <Link href={post.url}>
                   <img src={'/'+ post.image} alt="blog image" />
            </Link>
        </div>
        <ul className="blog-post-meta">
            <li><i className='far fa-folder-open'></i> {post.network}</li>
            <li><i className="flaticon-businessman"></i> <Link href="/blog"><a>{post.user}</a></Link></li>
            <li><i className='flaticon-calendar'></i> {post.date}</li>
        </ul>
        <div className="standard-blog-content">
            <h2 className="title">
              <Link href={post.url}>
                  {post.title}
              </Link>
            </h2>
            <p>{post.text}</p>
            <Link href={post.url}>
                   <span className="btn transparent-btn">Read More</span>
            </Link>
        </div>
      </article>
  );
}

export default ArticleLayout;