import React from "react";

const BlogSocial = () => {
  return (
    <div className="widget">
      <h4 className="sidebar-widget-title">Síguenos</h4>
      <ul className="sidebar-social">
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100064053851230"
            target="_blank"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/intalnet_telecomunicaciones/"
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        {/* <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li> */}
        <li>
          <a href="#" target="_blank">
            <i className="fab fa-youtube"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BlogSocial;
