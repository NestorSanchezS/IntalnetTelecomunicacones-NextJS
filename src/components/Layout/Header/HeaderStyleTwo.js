import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import BurgerMenus from "./BurgerMenus";
import Head from "next/head";
import HeaderLogoTwo from "./HeaderLogoTwo";
import TopHeaderTwo from "./TopBarTwo";
import { useIntalnetContext } from "../../../hooks/useIntalnetContext";
import { HeaderCitie } from "./HeaderCitie";

const HeaderTwo = () => {
  const { getCities } = useIntalnetContext();

  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(router.pathname);
  }, [router]);

  // Sticky Menu Area start
  useEffect(() => {
    window.addEventListener("scroll", sticky);
    return () => {
      window.removeEventListener("scroll", sticky);
    };
  });

  const sticky = (e) => {
    const header = document.querySelector(".menu-area");
    const scrollTop = window.scrollY;
    scrollTop >= 54
      ? header.classList.add("sticky-menu")
      : header.classList.remove("sticky-menu");
  };
  // Sticky Menu Area End

  // Lógica para el menú "Info Usuarios"
  const isInfoActive =
    path === "/faq" ||
    path === "/userprotection" ||
    path === "/internetsano" ||
    path === "/pqr" ||
    path === "/tdt";

  return (
    <React.Fragment>
      <Head>
        <title>Intalnet Telecomunicaciones</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* AÑADIDO: Font Awesome es necesario para los iconos fas/fal */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
      <header className="header-style-two">
        <HeaderLogoTwo />
        <TopHeaderTwo />
        <div id="header-top-fixed"></div>
        <div id="sticky-header" className="menu-area">
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div
                  className="mobile-nav-toggler"
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                  }}
                >
                  <i className="fas fa-bars"></i>
                </div>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo">
                      <Link href="/">
                        <a>
                          <img
                            src="/assets/img/logo/logo.png"
                            alt="img not found"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="navbar-wrap navbar-wrap-two main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li className={path === "/" ? "active" : ""}>
                          <Link href="/">
                            <a>Inicio</a>
                          </Link>
                        </li>
                        <li className={path === "/about" ? "active" : ""}>
                          <Link href="/about">
                            <a>Nosotros</a>
                          </Link>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Planes por sedes</a>
                          <ul className="sub-menu">
                            {getCities.map((citie) => (
                              <HeaderCitie key={citie.id} citie={citie} />
                            ))}
                          </ul>
                        </li>
                        <li
                          className={
                            isInfoActive
                              ? "active menu-item-has-children"
                              : "menu-item-has-children"
                          }
                        >
                          <a href="#">Info Usuarios</a>
                          <ul className="sub-menu">
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
                            <li>
                              <Link href="/tdt">
                                <a>TDT</a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className={path === "/shop" ? "active" : ""}>
                          <Link href="/shop">
                            <a>Accesorios de Tecnologia</a>
                          </Link>
                        </li>
                        <li className={path === "/contact" ? "active" : ""}>
                          <Link href="/contact">
                            <a>Contáctenos</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="header-action d-none d-md-block">
                      <ul>
                        <li className="header-shop-cart">
                          {/* Carrito de compras comentado */}
                        </li>
                        <li className="header-phone">
                          <div className="icon">
                            <i className="fal fa-mobile-android"></i>
                          </div>
                          <div className="content">
                            <span>Atención solo vía WhatsApp:</span>
                            <h5 className="number">
                              <a
                                href="https://wa.me/573148042601"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                +57 314 8042601
                              </a>
                            </h5>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>

                <BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <div
                  onClick={() => setMenuOpen(false)}
                  className={menuOpen ? "body-overlay show" : "body-overlay"}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- ESTILOS MODERNOS AÑADIDOS --- */}
      <style jsx>{`
        /* --- Transición para el menú --- */
        .menu-area {
          transition: all 0.4s ease;
          background-color: #ffffff; /* Fondo blanco por defecto */
        }

        /* --- ESTILO STICKY (Glassmorphism) --- */
        .sticky-menu {
          background: rgba(255, 255, 255, 0.85); /* Fondo de vidrio */
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px); /* Para Safari */
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* --- Animación de subrayado para el menú --- */
        .navigation li a {
          position: relative;
          text-decoration: none;
          /* color: inherit; */ /* Comentado para usar el color de abajo */
          padding-bottom: 5px;
          display: inline-block;
          font-weight: 500; /* Texto un poco más grueso */
          color: #2c3e50; /* Color de texto oscuro principal */
        }

        .navigation li a::before {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%; /* Inicia desde el centro */
          transform: translateX(-50%); /* Centrado */
          background-color: #007bff; /* Color del subrayado */
          visibility: hidden;
          transition: all 0.3s ease-in-out;
        }

        .navigation li:hover > a::before,
        .navigation li.active > a::before {
          visibility: visible;
          width: 100%; /* Se expande desde el centro */
        }
        
        /* Color del texto al pasar el ratón (no activo) */
        .navigation li:hover > a {
            color: #007bff;
        }

        /* Mantener el color del texto activo */
        .navigation li.active > a {
          color: #007bff !important; /* Color de acento azul para el texto activo */
        }

        /* Asegurar que el color del texto activo no cambie al hacer hover */
        .navigation li.active:hover > a {
          color: #007bff !important;
        }
        
        /* --- Estilos para el CTA de WhatsApp --- */
        .header-phone {
          display: flex;
          align-items: center;
        }
        .header-phone .icon {
          font-size: 2.2rem; /* Icono más grande */
          color: #007bff; /* Color azul */
          margin-right: 12px;
          line-height: 1;
        }
        .header-phone .content span {
          font-size: 0.8rem;
          font-weight: 500;
          color: #555;
          display: block;
          margin-bottom: 2px;
        }
        .header-phone .content .number {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0;
          line-height: 1.2;
        }
        .header-phone .content .number a {
          color: #1a202c; /* Texto oscuro */
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .header-phone .content .number a:hover {
          color: #007bff;
        }

        /* Ajustes para el menú sticky */
        .sticky-menu .header-phone .icon {
          font-size: 1.8rem; /* Icono más pequeño en sticky */
        }
        .sticky-menu .header-phone .content .number {
          font-size: 1rem;
        }
        .sticky-menu .header-phone .content span {
          font-size: 0.75rem;
        }
        
        /* Asegura que los colores del texto se mantengan en modo sticky */
        .sticky-menu .navigation li a {
            color: #2c3e50;
        }
        .sticky-menu .navigation li.active > a {
            color: #007bff !important;
        }
        .sticky-menu .navigation li:hover > a {
            color: #007bff;
        }
        .sticky-menu .header-phone .content .number a {
            color: #1a202c;
        }
        .sticky-menu .header-phone .content span {
            color: #555;
        }

      `}</style>
    </React.Fragment>
  );
};

export default HeaderTwo;
