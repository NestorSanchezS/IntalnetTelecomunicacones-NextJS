import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useIntalnetContext } from "../../../hooks/useIntalnetContext";
import { HeaderCitie } from "./HeaderCitie";

const BurgerMenus = ({ setMenuOpen, menuOpen }) => {
  const [home, setHome] = useState(false);
  const [courses, setcourses] = useState(false);
  const [blog, setBlog] = useState(false);
  const [pages, setPages] = useState(false);

  const router = useRouter();
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(router.pathname);
  }, [router]);

  const openMobileMenu = (menu) => {
    if (menu == "home") {
      setHome(!home);
      setcourses(false);
      setBlog(false);
      setPages(false);
    } else if (menu == "courses") {
      setHome(false);
      setcourses(!courses);
      setBlog(false);
      setPages(false);
    } else if (menu == "blog") {
      setHome(false);
      setcourses(false);
      setBlog(!blog);
      setPages(false);
    } else if (menu == "pages") {
      setHome(false);
      setcourses(false);
      setBlog(false);
      setPages(!pages);
    }
  };

  const { getCities } = useIntalnetContext();

  return (
    <div className="fix">
      <div className={menuOpen ? "side-info info-open" : "side-info"}>
        <button className="side-info-close" onClick={() => setMenuOpen(false)}>
          <i className="fal fa-times"></i>
        </button>
        <div className="side-info-content">
          <div className="mm-menu">
            <ul>
              <li>
                <Link href="/">
                  <a>Inicio</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>Nosotros</a>
                </Link>
              </li>
              <li
                className={courses ? "has-droupdown active" : "has-droupdown"}
              >
                <a
                  onClick={() => {
                    openMobileMenu("courses");
                  }}
                >
                  Planes por sedes
                </a>
                <ul className={courses ? "sub-menu active" : "sub-menu"}>
                  {getCities.map((citie) => (
                    <HeaderCitie key={citie.id} citie={citie} />
                  ))}
                </ul>
              </li>
              <li className={blog ? "has-droupdown active" : "has-droupdown"}>
                <a
                  onClick={() => {
                    openMobileMenu("blog");
                  }}
                >
                  Info de Usuarios
                </a>
                <ul className={blog ? "sub-menu active" : "sub-menu"}>
                  <li>
                    <Link href="/faq">
                      <a>Preguntas Frecuentes</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/userprotection">
                      <a>Proteción al Usuario</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/internetsano">
                      <a>Internet Sano</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pqr">
                      <a>PQR</a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/error">
                      <a>404 Page</a>
                    </Link>
                  </li> */}
                </ul>
              </li>
              <li>
                <Link href="/shop">
                  <a>Accesorios de Tecnologia</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contáctenos</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="contact-infos mb-30">
            <div className="contact-list mb-30">
              <h4>Contact Info</h4>
              <ul>
                <li>
                  <i className="flaticon-location"></i> Cr. 25 No. 23-74 Calle
                  la Pradera. Montería
                </li>
                <li>
                  <i className="flaticon-email"></i>{" "}
                  intalnet.servicioalcliente@gmail.com
                </li>
                <li>
                  <i className="flaticon-clock"></i> Opening Time : 8 AM - 6 PM
                </li>
              </ul>
              <div className="sidebar__menu--social">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenus;
