import React from "react";
import Link from "next/link";

const BlogCategory = () => {
  return (
    <div className="widget">
      <h4 className="sidebar-widget-title">Browse Category</h4>
      <ul className="sidebar-cat-list">
        <li>
          <Link href="#">
            <a>
              Todas las categorías <span>(252)</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              Router Tenda <span>(58)</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              ONU <span>(10)</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              OLT <span>(96)</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              Monitor <span>(82)</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              TV <span>(30)</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              Banda Ancha <span>(10)</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog-details">
            <a>
              Procesador <span>(42)</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BlogCategory;
