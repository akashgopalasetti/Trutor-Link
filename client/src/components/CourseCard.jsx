import React from "react";
import "./CourseCard.css";

export default function CourseCard({ course, onApply }) {
  return (
    <div className="course-card">
      <h3>{course.courseName}</h3>
      <p>{course.description}</p>
      <p>Price: ₹{course.price}</p>

      {/* Sample Video Link */}
      {course.videoLink && (
        <a 
          href={course.videoLink} 
          target="_blank" 
          rel="noreferrer"
          className="video-link"
        >
          Watch Demo
        </a>
      )}

      <button onClick={onApply} className="enroll-btn">
        Enroll / Request
      </button>
    </div>
  );
}
