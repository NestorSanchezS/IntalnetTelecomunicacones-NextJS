import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import TopHeader from './TopBar';
import BurgerMenus from './BurgerMenus';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const router = useRouter()
    const [path, setPath] = useState("")
    useEffect(() => {
        setPath(router.pathname)
    }, [router])

    // Sticky Menu Area start
    useEffect(() => {
        window.addEventListener('scroll', sticky);
        return () => {
            window.removeEventListener('scroll', sticky);
        };
    });

    const sticky = (e) => {
        const header = document.querySelector('.menu-area');
        const scrollTop = window.scrollY;
        scrollTop >= 50 ? header.classList.add('sticky-menu') : header.classList.remove('sticky-menu');
    };
    // Sticky Menu Area End

    return (
        <React.Fragment>
            <Head>
                <title>Intalnet Telecomunicaciones</title>
                <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                <link 
                  rel="stylesheet" 
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" 
                />
            </Head>
            <header>
                <TopHeader />
                <div id="sticky-header" className="menu-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler" onClick={() => { setMenuOpen(!menuOpen) }}><i className="fas fa-bars"></i></div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo">
                                            <Link href="/"><a><img src="/assets/img/logo/logo.png" alt="Intalnet Logo"/></a></Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul className="navigation">
                                                
                                                <li className={path === "/" ? "active" : ""}>
                                                    <Link href="/"><a>Inicio</a></Link>
                                                </li>
                                                
                                                <li className={path === "/services" || path === "/service-details" ? "active menu-item-has-children" : "menu-item-has-children"}>
                                                    <Link href="/services"><a>Servicios</a></Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/services"><a>Nuestros Servicios</a></Link></li>
                                                        <li><Link href="/service-details"><a>Detalles del Servicio</a></Link></li>
                                                    </ul>
                                                </li>

                                                <li className={path === "/pricing" ? "active" : ""}>
                                                    <Link href="/pricing"><a>Planes</a></Link>
                                                </li>

                                                <li>
                                                    <a href="http://50.0.0.20/wispflix/" target="_blank" rel="noopener noreferrer">Intalflix</a>
                                                </li>
                                                
                                                <li className={path === "/contact" ? "active" : ""}>
                                                    <Link href="/contact"><a>Contacto</a></Link>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                        <div className="header-action d-none d-md-block">
                                            <ul>
                                                <li className="header-btn">
                                                    <Link href="/contact"><a className="btn btn-modern-header">Contáctanos</a></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>
            </header>

            <style jsx>{`
                /* Estilos para el botón del header */
                .btn-modern-header {
                  display: inline-block;
                  padding: 12px 35px;
                  font-size: 0.95rem;
                  font-weight: 600;
                  text-align: center;
                  color: white;
                  background: linear-gradient(45deg, #007bff, #0056b3);
                  border-radius: 8px;
                  text-decoration: none;
                  transition: all 0.3s ease;
                  box-shadow: 0 5px 12px rgba(0, 86, 179, 0.3);
                  border: none;
                }
                .btn-modern-header:hover {
                  transform: translateY(-3px);
                  box-shadow: 0 8px 15px rgba(0, 86, 179, 0.4);
                  color: white; /* Asegura que el texto siga siendo blanco */
                }
                
                /* Estilo para el botón en el menú "sticky" */
                .sticky-menu .btn-modern-header {
                   padding: 10px 30px;
                   font-size: 0.9rem;
                }

                /* --- Animación de subrayado para el menú --- */
                .navigation li a {
                    position: relative;
                    text-decoration: none;
                    color: inherit; /* Hereda el color base del menú */
                    padding-bottom: 5px; /* Espacio para el subrayado */
                }

                .navigation li a::before {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: #007bff; /* Color del subrayado */
                    visibility: hidden;
                    transition: all 0.3s ease-in-out;
                }

                .navigation li:hover a::before,
                .navigation li.active a::before {
                    visibility: visible;
                    width: 100%;
                }

                /* Mantener el color del texto activo */
                .navigation li.active > a {
                    color: #007bff; /* Color de acento azul para el texto activo */
                }
                
                /* Asegurar que el color del texto activo no cambie al hacer hover */
                .navigation li.active:hover > a {
                    color: #007bff;
                }
            `}</style>
        </React.Fragment>
    );
}

export default Header;

