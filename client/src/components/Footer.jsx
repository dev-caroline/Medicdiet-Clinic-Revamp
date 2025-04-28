import React from 'react';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Nutrition Consult</h3>
            <p>Your healthy lifestyle starts here!</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/#hero">Home</a></li>
              <li><a href="/#about">About Us</a></li>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="https://www.facebook.com/share/cT3bhG2PNanMs5YH/?mibextid=LQQJ4d" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="https://www.instagram.com/medicdietclinic/profilecard/?igsh=MWZmaDJiZXl6bXFhaA==" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://www.tiktok.com/@medicclinicdiet?_t=8siRuAFG5MI&_r=1" target="_blank" rel="noreferrer">Tiktok</a></li>
            </ul>
          </div>
        </div>
      </div>
      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </footer>
  );
};

export default Footer;