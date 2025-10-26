import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <header className="hero-section">
        <h1>Welcome to <span className="highlight">TutorLink</span></h1>
        <p>
          Bridging the gap between <strong>students</strong> and <strong>tutors</strong>.  
          Learn, teach, and grow — all in one platform.
        </p>
        <div className="cta-buttons">
          <Link to="/login" className="btn primary">Find a Tutor</Link>
          <Link to="/register" className="btn secondary">Become a Tutor</Link>
        </div>
      </header>

      <section className="features">
        <h2>Why Choose TutorLink?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🎓 Student Dashboard</h3>
            <p>Browse courses, connect with tutors, and track your enrollments all in one place.</p>
          </div>
          <div className="feature-card">
            <h3>👨‍🏫 Tutor Dashboard</h3>
            <p>Create and manage courses easily. Track enrolled students and respond to their requests.</p>
          </div>
          <div className="feature-card">
            <h3>🌐 Easy Communication</h3>
            <p>Stay connected with your tutor or student directly through the platform.</p>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>About TutorLink</h2>
        <p>
          TutorLink is a simple yet powerful MERN-based web app that connects students and tutors.  
          Students can explore available courses, while tutors can upload content and manage their sessions efficiently.
        </p>
        <p>
          Our mission is to make quality education more accessible and personal.  
          Whether you’re looking to <strong>learn</strong> or <strong>teach</strong>, TutorLink helps you achieve your goals.
        </p>
      </section>

      
    </div>
  );
}
