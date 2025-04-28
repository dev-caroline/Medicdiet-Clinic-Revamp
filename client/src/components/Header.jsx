import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header id="header" className={`header d-flex align-items-center fixed-top ${isScrolled ? 'scrolled' : ''}`} style={{ backgroundColor: "#FDC61C"}}>
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Link to="/" className="logo d-flex align-items-center me-auto">
          <img src="/images/MEDIc_Diet_clinic__2_-removebg-preview.png" width="70" alt="Medicdiet Clinic Logo" />
          <h1 className="sitename text-dark fw-bold fst-italic">MEDICDIET <sub>CLINIC</sub></h1>
        </Link>

        <nav id="navmenu" className={`navmenu ${isMobileNavOpen ? 'navmenu-mobile' : ''}`}>
          <ul>
            <li><a href="/#hero" className="active">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#team">Team</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
          <i 
            className="mobile-nav-toggle d-xl-none bi bi-list" 
            onClick={toggleMobileNav}
          ></i>
        </nav>

        <Link className="btn-getstarted bg-dark" to="/form">Get Started</Link>
      </div>
    </header>
  );
};

export default Header;