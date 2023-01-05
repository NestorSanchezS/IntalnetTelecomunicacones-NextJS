import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

const BurgerMenus = ({setMenuOpen, menuOpen}) => {

      const [home, setHome] = useState(false)
      const [courses, setcourses] = useState(false)
      const [blog, setBlog] = useState(false)
      const [pages, setPages] = useState(false)

      const router = useRouter()
      const [path, setPath] = useState("")
      useEffect(() => {
        setPath(router.pathname)
      }, [router])

      const openMobileMenu = menu => {
        
        if( menu == 'home'){
          setHome(!home)
          setcourses(false)
          setBlog(false)
          setPages(false)
        }
        else if( menu == 'courses'){
          setHome(false)
          setcourses(!courses)
          setBlog(false)
          setPages(false)
        }
        else if( menu == 'blog'){
          setHome(false)
          setcourses(false)
          setBlog(!blog)
          setPages(false)
        }
        else if( menu == 'pages'){
          setHome(false)
          setcourses(false)
          setBlog(false)
          setPages(!pages)
        }
      }; 

      return (
        <div className="fix">
          <div className={menuOpen ? "side-info info-open": "side-info"}>
              <button className="side-info-close" onClick={() => setMenuOpen(false)}><i className="fal fa-times"></i></button>
              <div className="side-info-content">
                  <div className="mm-menu">
                      <ul>
                      <li className={home ? "has-droupdown active" : "has-droupdown"}>
                          <a onClick={() => { openMobileMenu('home'); }}>Home</a>
                          <ul className={home ? "sub-menu active" : "sub-menu"}>
                              <li><Link href="/"><a>Home Style 1</a></Link></li>
                              <li><Link href="/"><a>Home Style 2</a></Link></li>
                          </ul>
                      </li>
                      <li><Link href="/about"><a>About</a></Link></li>
                      <li className={courses ? "has-droupdown active" : "has-droupdown"}>
                          <a onClick={() => { openMobileMenu('courses'); }}>Services</a>
                          <ul className={courses ? "sub-menu active" : "sub-menu"}>
                              <li><Link href="/services"><a>Services</a></Link></li>
                              <li><Link href="/service-details"><a>Services Details</a></Link></li>
                          </ul>
                      </li>
                      <li className={blog ? "has-droupdown active" : "has-droupdown"}>
                          <a onClick={() => { openMobileMenu('blog'); }}>Blog</a>
                          <ul className={blog ? "sub-menu active" : "sub-menu"}>
                              <li><Link href="/blog"><a>Blog</a></Link></li>
                              <li><Link href="/blog-details"><a>Blog Details</a></Link></li>
                          </ul>
                      </li>
                      <li className={pages ? "has-droupdown active" : "has-droupdown"}>
                          <a onClick={() => { openMobileMenu('pages'); }}>Pages</a>
                          <ul className={pages ? "sub-menu active" : "sub-menu"}>
                              <li><Link href="/team"><a>Our Team</a></Link></li>
                              <li><Link href="/faq"><a>Faq</a></Link></li>
                              <li><Link href="/shop"><a>Our Shop</a></Link></li>
                              <li><Link href="/shop-details"><a>Shop Details</a></Link></li>
                              <li><Link href="/error"><a>Error</a></Link></li>
                        </ul>
                      </li>
                      <li><Link href="/contact"><a>Contact</a></Link></li>
                  </ul>
                  </div>
                  <div className="contact-infos mb-30">
                      <div className="contact-list mb-30">
                          <h4>Contact Info</h4>
                          <ul>
                              <li><i className="flaticon-location"></i> broklyn street road, New York</li>
                              <li><i className="flaticon-email"></i> info@example.com</li>
                              <li><i className="flaticon-clock"></i> Opening Time : 10: AM - 10 PM</li>
                          </ul>
                          <div className="sidebar__menu--social">
                              <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                              <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                              <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                              <a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default BurgerMenus;