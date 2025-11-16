import React from "react";
import logo from "../assets/icon.png";
import "../styles/Home.css";

function Home() {
    return(
        <div className="home">
            <header className="home-header">
                <img src={logo} alt="HealthTrack logo" className="home-logo" />
                <h1 className="home-title">Welcome To HealthTrack</h1>
                <p className="home-subtitle">Your daily guide to better health,fitness, and wellness </p>
            </header>
        <section className="mission-section">
            <h2>Our Mission</h2>
            <p>At HealthTrack, our mission is to help you take control of your health through smart tools, clear insights, and personalized guidance.</p>
        </section>
        <section className="statistics-section">
            <div className="statistics-box">
                <h3>50+</h3>
                <p>Health Experts</p>
            </div>
            <div className="statistics-box">
                <h3>5k+</h3>
                <p>Active Users</p>
            </div>
            <div className="statistics-box">
                <h3>99%</h3>
                <p>Users Satisfication</p>
            </div>
            <div className="statistics-box">
                <h3>150+</h3>
                <p>Daily Reports</p>
            </div>
        </section>
        <section className="reviews-section">
            <h2>Users Reviews</h2>
            <div className="reviews-box">
                <p> “HealthTrack helped me understand my habits and live healthier. I use it every day!”</p>
                <span>Sarah</span>
            </div>
            <div className="reviews-box">
                <p>“Very easy to use and super helpful. I love the fitness and nutrition tracking features.”</p>
                <span>Dany</span>
            </div>

        </section>
            
            
        </div>

    );
}
export default Home;
