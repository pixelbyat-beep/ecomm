import React from 'react';
import '../styles/Footer.css'; // Adjust the path if necessary
// Importing real brand icons from react-icons (FontAwesome 6)
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          {/* Left Side: Brand Name */}
          <div className="footer__brand">
            <h1 className="footer__logo">VRELUX</h1>
          </div>

          {/* Right Side: Links and Socials */}
          <div className="footer__links">
            <div className="footer__column">
              <h4 className="footer__column-title">Information</h4>
              <ul className="footer__list">
                <li><a href="#account" className="footer__link">My account</a></li>
                <li><a href="#login" className="footer__link">Login</a></li>
                <li><a href="#orders" className="footer__link">My Order</a></li>
                <li><a href="#cart" className="footer__link">My Cart</a></li>
                <li><a href="#checkout" className="footer__link">Check out</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Service</h4>
              <ul className="footer__list">
                <li><a href="#about" className="footer__link">About Us</a></li>
                <li><a href="#delivery" className="footer__link">Delivery Policy</a></li>
                <li><a href="#privacy" className="footer__link">Privacy Policy</a></li>
                <li><a href="#refund" className="footer__link">Refund Policy</a></li>
                <li><a href="#terms" className="footer__link">Terms & Condition</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Social media</h4>
              <div className="footer__socials">
                {/* Replaced text placeholders with actual React Icons */}
                <a href="#facebook" className="footer__social-icon" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#instagram" className="footer__social-icon" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#linkedin" className="footer__social-icon" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="#x" className="footer__social-icon" aria-label="X">
                  <FaXTwitter />
                </a>
                <a href="#youtube" className="footer__social-icon" aria-label="YouTube">
                  <FaYoutube />
                </a>
                <a href="#whatsapp" className="footer__social-icon" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Side: Copyright */}
        <div className="footer__bottom">
          <p className="footer__copyright">2024 All Rights are Reserved by Robust</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;