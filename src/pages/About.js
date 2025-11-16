import React from "react";
import "../styles/About.css";
import AboutCard from "../components/AboutCard";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import team1 from "../assets/team1.jpg"; 
import team2 from "../assets/team2.jpg"; 
import team3 from "../assets/team3.jpg"; 
import team4 from "../assets/team4.jpg"; 
import team5 from "../assets/team5.jpg";

function About() {
  const aboutData = [
    {
      image: about1,
      title: "Our Mission",
      description: "To make health tracking simple and accessible for everyone."
    },
    {
      image: about2,
      title: "Our Vision",
      description: "We aim to connect technology and health for a better lifestyle."
    },
    {
      image: about3,
      title: "Meet Our Team",
      description: "A group of health professionals passionate about wellness."
    }
  ];

  return (
    <div className="about-page">
      <h2>About HealthTrack</h2>
      <p className="about-intro">
        HealthTrack is a digital health platform that helps users monitor their fitness,
        track medical progress, and stay connected with professionals anytime.
      </p>

      <div className="about-container">
        {aboutData.map((item, index) => (
          <AboutCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <section className="about-team-section">
        <h3>Our Health Professionals</h3>

        <div className="about-team-container">

          <div className="team-card">
            <img src={team1} alt="Doctor" />
            <h4>Medical Doctor</h4>
            <p className="job-title">Certified Health Practitioner</p>
            <p className="team-desc">
              Offers medical expertise, diagnosis, and professional health advice.
            </p>
          </div>

          <div className="team-card">
            <img src={team4} alt="Fitness Coach" />
            <h4>Fitness Coach</h4>
            <p className="job-title">Workout & Training Specialist</p>
            <p className="team-desc">
              Designs personalized workout plans and improves overall strength.
            </p>
          </div>

          <div className="team-card">
            <img src={team5} alt="Mental Health" />
            <h4>Mental Health Advisor</h4>
            <p className="job-title">Well-Being & Motivation Expert</p>
            <p className="team-desc">
              Supports emotional balance, stress management, and motivation.
            </p>
          </div>

          <div className="team-card">
            <img src={team3} alt="Nutrition" />
            <h4>Nutrition Specialist</h4>
            <p className="job-title">Healthy Meal Planning Expert</p>
            <p className="team-desc">
              Creates personalized nutrition plans for a healthier lifestyle.
            </p>
          </div>

          <div className="team-card">
            <img src={team2} alt="Healthcare" />
            <h4>Healthcare Assistant</h4>
            <p className="job-title">Medical Support Coordinator</p>
            <p className="team-desc">
              Provides guidance and ensures users get reliable health support.
            </p>
          </div>

        </div>
      </section>

      <section className="why-choose">
        <h3>Why Choose HealthTrack?</h3>
        <ul>
          <li>✅ Easy-to-use and reliable health tools</li>
          <li>✅ Personalized progress tracking</li>
          <li>✅ Trusted and verified health professionals</li>
          <li>✅ 24/7 customer support</li>
        </ul>
      </section>

    </div>
  );
}

export default About;

