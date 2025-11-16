import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icon.png";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <nav className ="navbar">
            <Link to ="/" className="logo">
            <img src={logo} alt="HealthTrack logo" />
            </Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/features">Features</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/bmicalculator">BmiCalculator</Link>

            </div>
        </nav>
    );
}
export default Navbar;