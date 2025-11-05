import React from "react";
import Link from "next/link";

const TopHeaderTwo = () => {
  return (
    <div className="header-top-wrap">
      <div className="container custom-container">
        <div className="row">
          <div className="col-xl-7 col-lg-6 col-md-7 col-sm-7">
            <div className="header-top-left">
              <ul>
                <li className="d-none d-xxl-flex">
                  <i className="flaticon-location"></i> Montería - Córdoba,
                  Colombia, CO
                </li>
                <li className="d-none d-lg-flex">
                  <i className="flaticon-email"></i>{" "}
                  servicioalcliente@intalnet.com
                </li>
                <li className="d-xxxxl-flex">
                  <i className="flaticon-clock"></i> Horario de apertura : 8: AM
                  - 6 PM
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 col-md-5 col-sm-5">
            <div className="header-top-right">
              <ul>
                <li className="header-user-info">
                  <i className="flaticon-businessman"></i>
                  {/* <Link href="/"><a>Login / Registrarse</a></Link> */}
                </li>
                <li className="header-social">
                  <a href="#" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100064053851230"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/intalnet_telecomunicaciones/"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeaderTwo;
