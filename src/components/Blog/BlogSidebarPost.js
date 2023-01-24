import React from "react";
import Link from "next/link";

const BlogSidebarPost = () => {
  return (
    <div className="widget">
      <h4 className="sidebar-widget-title">Recent Posts</h4>
      <ul className="rc-post-list">
        <li>
          <div className="rc-post-thumb">
            <Link href="#">
              <a>
                <img
                  src="/assets/img/blog/rc_post_thumb01.jpg"
                  alt="img not found"
                />
              </a>
            </Link>
          </div>
          <div className="rc-post-content">
            <h6 className="title">
              <Link href="#">
                <a>
                  Necesidades de conexión de banda ancha para la vida de todos
                </a>
              </Link>
            </h6>
            <span className="date">15 Feb 2023</span>
          </div>
        </li>
        <li>
          <div className="rc-post-thumb">
            <Link href="#">
              <a>
                <img
                  src="/assets/img/blog/rc_post_thumb02.jpg"
                  alt="img not found"
                />
              </a>
            </Link>
          </div>
          <div className="rc-post-content">
            <h6 className="title">
              <Link href="#">
                <a>Por qué las empresas tienen un enfoque de red híbrida</a>
              </Link>
            </h6>
            <span className="date">28 Mar 2023</span>
          </div>
        </li>
        {/* <li>
          <div className="rc-post-thumb">
            <Link href="#">
              <a>
                <img
                  src="/assets/img/blog/rc_post_thumb03.jpg"
                  alt="img not found"
                />
              </a>
            </Link>
          </div>
          <div className="rc-post-content">
            <h6 className="title">
              <Link href="#">
                <a>Here to Put a Spring In Step This September</a>
              </Link>
            </h6>
            <span className="date">29 Mar 2023</span>
          </div>
        </li> */}
        <li>
          <div className="rc-post-thumb">
            <Link href="#">
              <a>
                <img
                  src="/assets/img/blog/rc_post_thumb04.jpg"
                  alt="img not found"
                />
              </a>
            </Link>
          </div>
          <div className="rc-post-content">
            <h6 className="title">
              <Link href="#">
                <a>
                  La banda ancha actualiza la capacidad de la red a través de
                  Intalnet
                </a>
              </Link>
            </h6>
            <span className="date">03 Abril 2023</span>
          </div>
        </li>
        {/* <li>
          <div className="rc-post-thumb">
            <Link href="#">
              <a>
                <img
                  src="/assets/img/blog/rc_post_thumb05.jpg"
                  alt="img not found"
                />
              </a>
            </Link>
          </div>
          <div className="rc-post-content">
            <h6 className="title">
              <Link href="#">
                <a>Cuttlefish Memory Stays Sharper Than Humans</a>
              </Link>
            </h6>
            <span className="date">17 Abril 2023</span>
          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default BlogSidebarPost;
