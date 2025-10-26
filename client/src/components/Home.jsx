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
    <strong>TutorLink</strong> is a user-friendly MERN-based platform designed to seamlessly connect students with tutors.  
    Students can browse and enroll in courses that match their interests, while tutors can effortlessly upload, manage, and share their content.
  </p>
  <p>
    Our mission is to make <strong>quality education accessible</strong> to everyone.  
    Whether you aim to <strong>learn</strong> new skills or <strong>teach</strong> your expertise, TutorLink provides the tools to help you achieve your goals efficiently and effectively.
  </p>
  <p>
    Join our growing community and experience a personalized approach to learning and teaching, all in one intuitive platform.
  </p>
</section>

      
    </div>
  );
}
