import React from "react";
import Link from "next/link";

const Blog = () => {
  return (
    <section className="blog-area pt-110">
      <div className="container">
        {/* <div className="row align-items-end justify-content-between mb-60">
                    <div className="col-xl-5 col-lg-6 col-md-8">
                        <div className="section-title">
                            <h2 className="title">Read Our Recent Blog Posts</h2>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4">
                        <div className="section-title-btn text-start text-md-end">
                            <Link href="/blog"><a className="btn transparent-btn">Read all posts</a></Link>
                        </div>
                    </div>
                </div> */}
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-9">
            <div
              className="blog-post-item mb-50 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="blog-post-thumb">
                <a href="https://www.mintic.gov.co/" target="_blank">
                  <img src="/assets/img/blog/mintic.jpg" alt="img not found" />
                </a>
              </div>
              <div className="blog-post-content">
                <ul className="blog-post-meta">
                  <li>
                    <i className="far fa-folder-open"></i> Network
                  </li>
                  <li>
                    <i className="flaticon-businessman"></i>{" "}
                    <Link href="/">
                      <a>Intalnet</a>
                    </Link>
                  </li>
                  <li>
                    <i className="flaticon-calendar"></i> 20 Feb 2023
                  </li>
                </ul>
                <h3 className="title">
                  <a href="https://www.mintic.gov.co/" target="_blank">
                    MINISTERIO TIC
                  </a>
                </h3>
                <h5>Teléfonos:</h5>
                <p>3443460 en Bogotá</p>

                <a
                  className="btn transparent-btn"
                  href="https://www.mintic.gov.co/"
                  target="_blank"
                >
                  Leer Más
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-9">
            <div
              className="blog-post-item mb-50 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="blog-post-thumb">
                <a href="https://www.fiscalia.gov.co" target="_blank">
                  <img
                    src="/assets/img/blog/fiscalia.jpg"
                    alt="img not found"
                  />
                </a>
              </div>
              <div className="blog-post-content">
                <ul className="blog-post-meta">
                  <li>
                    <i className="far fa-folder-open"></i> Network
                  </li>
                  <li>
                    <i className="flaticon-businessman"></i>{" "}
                    <Link href="/">
                      <a>Intalnet</a>
                    </Link>
                  </li>
                  <li>
                    <i className="flaticon-calendar"></i> 20 Feb 2023
                  </li>
                </ul>
                <h3 className="title">
                  <a href="https://www.fiscalia.gov.co" target="_blank">
                    FISCALÍA GENERAL DE LA NACIÓN
                  </a>
                </h3>
                <h5>Teléfonos:</h5>
                <p>01 8000 916 111</p>

                <a
                  className="btn transparent-btn"
                  href="https://www.fiscalia.gov.co"
                  target="_blank"
                >
                  Leer Más
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-9">
            <div
              className="blog-post-item mb-50 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="blog-post-thumb">
                <a href="https://www.icbf.gov.co/" target="_blank">
                  <img
                    src="/assets/img/blog/bienestar.jpg"
                    alt="img not found"
                  />
                </a>
              </div>
              <div className="blog-post-content">
                <ul className="blog-post-meta">
                  <li>
                    <i className="far fa-folder-open"></i> Network
                  </li>
                  <li>
                    <i className="flaticon-businessman"></i>{" "}
                    <Link href="/">
                      <a>Intalnet</a>
                    </Link>
                  </li>
                  <li>
                    <i className="flaticon-calendar"></i> 20 Feb 2023
                  </li>
                </ul>
                <h3 className="title">
                  <a href="https://www.icbf.gov.co/" target="_blank">
                    INSTITUTO COLOMBIANO DE BIENESTAR FAMILIAR: ICBF
                  </a>
                </h3>
                <h5>Linea gratuita nacional: Prevención de abuso sexual:</h5>
                <p> 01 8000 112 440</p>

                <a
                  className="btn transparent-btn"
                  href="https://www.icbf.gov.co/"
                  target="_blank"
                >
                  Leer Más
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
