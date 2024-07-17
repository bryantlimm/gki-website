import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-section logo-section">
      <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="logo" />
    </div>
    <div className="footer-section">
      <h3>KONTAK</h3>
      <p><img src={`${process.env.PUBLIC_URL}/whatsapp.png`} alt="WhatsApp" className="icon" /> +62-812-9059-3338</p>
      <p><img src={`${process.env.PUBLIC_URL}/email.png`} alt="Email" className="icon" /> gki.bjalamsutera@gmail.com</p>
    </div>
    <div className="footer-section">
      <h3>LOKASI GEREJA</h3>
      <p>Alam Sutera, Jl. Jalur Sutera KAV 26 A, Ruko Palmyra Square No.10 - 11, Kunciran, Pinang, Tangerang City, Banten 15320</p>
    </div>
    <div className="footer-section">
      <h3>IKUTI KAMI</h3>
      <div className="social-icons">
        <a href="https://www.youtube.com/@gkibungurbakaljemaatalamsu6315" target="_blank" rel="noopener noreferrer"><img src={`${process.env.PUBLIC_URL}/youtube.png`} alt="YouTube" className="icon" /></a>
        <a href="https://www.instagram.com/gkibjalsut/" target="_blank" rel="noopener noreferrer"><img src={`${process.env.PUBLIC_URL}/instagram.png`} alt="Instagram" className="icon" /></a>
        <a href="https://www.facebook.com/GKIposAlamsutera" target="_blank" rel="noopener noreferrer"><img src={`${process.env.PUBLIC_URL}/facebook.png`} alt="Facebook" className="icon" /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
