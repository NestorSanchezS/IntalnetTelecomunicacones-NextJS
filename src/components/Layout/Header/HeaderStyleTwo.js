import React, { useState, useEffect, useCallback, memo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import BurgerMenus from "./BurgerMenus";
import HeaderLogoTwo from "./HeaderLogoTwo";
import TopHeaderTwo from "./TopBarTwo";
import ShoppingCart from "./ShoppingCart";
import { useIntalnetContext } from "../../../hooks/useIntalnetContext";
import { HeaderCitie } from "./HeaderCitie";

// Constantes
const STICKY_THRESHOLD = 54;
const WHATSAPP_NUMBER = "573225802429";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

// Menu items configuration
const INFO_MENU_ITEMS = [
  { href: "/faq", label: "Preguntas Frecuentes" },
  { href: "/userprotection", label: "Protección al Usuario" },
  { href: "/internetsano", label: "Internet Sano" },
  { href: "/pqr", label: "PQR" },
  { href: "/tdt", label: "TDT" },

  { href: "/ley-1336-2009", label: "LEY 1336 DE 2009" },
  { href: "/seguridad-en-la-red", label: "Seguridad en la Red" },
  { href: "/politica-tratamiento-datos", label: "Política De Tratamiento De Datos" },
  { href: "/como-llegamos-a-tu-hogar", label: "Como Llegamos a tu Hogar" },
  { href: "/regimen-proteccion-usuario", label: "Regimen de Proteccion del Usuario" },
];

const MAIN_MENU_ITEMS = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Nosotros" },
];

// Componente para item de menú simple
const MenuItem = memo(({ href, label, isActive }) => (
  <li className={isActive ? "active" : ""}>
    <Link href={href}>
      <a>{label}</a>
    </Link>
  </li>
));

MenuItem.displayName = "MenuItem";

// Componente para submenú de información
const InfoSubmenu = memo(() => (
  <li className="menu-item-has-children">
    <a href="#">Info Usuarios</a>
    <ul className="sub-menu">
      {INFO_MENU_ITEMS.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>
            <a>{item.label}</a>
          </Link>
        </li>
      ))}
    </ul>
  </li>
));

InfoSubmenu.displayName = "InfoSubmenu";

// Componente para submenú de ciudades
const CitiesSubmenu = memo(({ cities }) => {
  if (!cities || cities.length === 0) return null;

  return (
    <li className="menu-item-has-children">
      <a href="#">Planes por sedes</a>
      <ul className="sub-menu">
        {cities.map((citie) => (
          <HeaderCitie key={citie.id} citie={citie} />
        ))}
      </ul>
    </li>
  );
});

CitiesSubmenu.displayName = "CitiesSubmenu";

// Componente para el botón de WhatsApp
const WhatsAppContact = memo(() => (
  <li className="header-phone">
    <div className="icon">
      <i className="fal fa-mobile-android"></i>
    </div>
    <div className="content">
      <span>Atención solo vía WhatsApp:</span>
      <h5 className="number">
        <a 
          href={WHATSAPP_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
        >
          +57 3225802429
        </a>
      </h5>
    </div>
  </li>
));

WhatsAppContact.displayName = "WhatsAppContact";

const HeaderTwo = () => {
  const { getCities } = useIntalnetContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const [path, setPath] = useState("");

  // Actualizar path cuando cambia la ruta
  useEffect(() => {
    setPath(router.pathname);
  }, [router.pathname]);

  // Función sticky memoizada
  const handleSticky = useCallback(() => {
    const header = document.querySelector(".menu-area");
    if (!header) return;

    const scrollTop = window.scrollY;
    const shouldStick = scrollTop >= STICKY_THRESHOLD;
    
    header.classList.toggle("sticky-menu", shouldStick);
  }, []);

  // Efecto para sticky menu con cleanup mejorado
  useEffect(() => {
    window.addEventListener("scroll", handleSticky, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleSticky);
    };
  }, [handleSticky]);

  // Cerrar menú cuando cambia la ruta
  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  // Toggle menu handler
  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <Head>
        <title>Intalnet Telecomunicaciones</title>
        <meta 
          name="description" 
          content="Servicios de telecomunicaciones de calidad" 
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
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
                {/* Mobile Menu Toggle */}
                <button
                  className="mobile-nav-toggler"
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                  aria-expanded={menuOpen}
                >
                  <i className="fas fa-bars"></i>
                </button>

                {/* Main Menu Wrap */}
                <div className="menu-wrap">
                  <nav className="menu-nav" role="navigation">
                    {/* Logo */}
                    <div className="logo">
                      <Link href="/">
                        <a aria-label="Ir a inicio">
                          <img
                            src="/assets/img/logo/logo.png"
                            alt="Logo Intalnet Telecomunicaciones"
                            width="150"
                            height="50"
                          />
                        </a>
                      </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="navbar-wrap navbar-wrap-two main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        {/* Main menu items */}
                        {MAIN_MENU_ITEMS.map((item) => (
                          <MenuItem
                            key={item.href}
                            href={item.href}
                            label={item.label}
                            isActive={path === item.href}
                          />
                        ))}

                        {/* Cities submenu */}
                        <CitiesSubmenu cities={getCities} />

                        {/* Info submenu */}
                        <InfoSubmenu />

                        {/* Shop */}
                        <MenuItem
                          href="/shop"
                          label="Accesorios de Tecnología"
                          isActive={path === "/shop"}
                        />

                        {/* Contact */}
                        <MenuItem
                          href="/contact"
                          label="Contáctenos"
                          isActive={path === "/contact"}
                        />
                      </ul>
                    </div>

                    {/* Header Actions */}
                    <div className="header-action d-none d-md-block">
                      <ul>
                        <li className="header-shop-cart">
                          {/* Shopping cart commented out as in original */}
                        </li>
                        <WhatsAppContact />
                      </ul>
                    </div>
                  </nav>
                </div>

                {/* Mobile Burger Menu */}
                <BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

                {/* Overlay */}
                <div
                  onClick={closeMenu}
                  className={`body-overlay ${menuOpen ? "show" : ""}`}
                  role="button"
                  tabIndex={menuOpen ? 0 : -1}
                  aria-label="Cerrar menú"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      closeMenu();
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default memo(HeaderTwo);