import React from "react";
import Link from "next/link";

const BlogTags = () => {
  return (
    <div className="widget">
      <h4 className="sidebar-widget-title">Etiquetas Populares</h4>
      <ul className="sidebar-tag-list">
        <li>
          <Link href="/blog-details">
            <a>Desarrollo Web - React</a>
          </Link>
        </li>
        <li>
          <Link href="/blog-details">
            <a>Mobile</a>
          </Link>
        </li>
        <li>
          <Link href="/blog-details">
            <a>Next JS</a>
          </Link>
        </li>
        <li>
          <Link href="/blog-details">
            <a>Node</a>
          </Link>
        </li>
        <li>
          <Link href="/blog-details">
            <a>Diseño Web</a>
          </Link>
        </li>
        <li>
          <Link href="/blog-details">
            <a>Reparar</a>
          </Link>
        </li>
        <li>
          <Link href="/blog-details">
            <a>UI/UX Research</a>
          </Link>
        </li>
        <li>
          <Link href="/blog-details">
            <a>Telecomunicaciones</a>
          </Link>
        </li>
        <li>
          <Link href="/blog-details">
            <a>Fibra Optica</a>
          </Link>
        </li>
        <li>
          <Link href="/blog-details">
            <a>FTTH</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BlogTags;
