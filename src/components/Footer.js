import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Empresa</h3>
          <span>Sobre Nosotros</span>
          <span>Equipo</span>
          <span>Noticias</span>
        </div>
        <div className="footer-column">
          <h3>Servicios</h3>
          <span>Desarrollo de Software</span>
          <span>Consultoría</span>
          <span>Integración IT</span>
        </div>
        <div className="social-icons">
          <img src="https://storage.googleapis.com/landing-page-w/assets/facebook.png" alt="Facebook" />
          <img src="https://storage.googleapis.com/landing-page-w/assets/linkedIn.png" alt="Linkedin" />
          <img src="https://storage.googleapis.com/landing-page-w/assets/instagram.png" alt="Instagram" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;