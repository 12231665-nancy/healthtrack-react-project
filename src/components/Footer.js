import React from "react";
import "../styles/Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaHeartbeat } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return(
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <FaHeartbeat className="footer-logo" />
                    <h2>HealthTrack</h2>
                    <p>Your trusted partner for a healthier life!</p>
                </div>
                <div className="footer-links">
                    <h4>Quick links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="features">Features</Link></li>
                        <li><Link to="contact">Contact</Link></li>
                        <li><Link to="bmicalculator">BmiCalculator</Link></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 HealthTrack. All rights reserved.</p>
            </div>

        </footer>
    );
}
export default Footer;