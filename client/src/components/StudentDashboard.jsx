
import React, { useEffect, useState } from "react";
import { api } from "../services/api";
import CourseCard from "./CourseCard";
import { useNavigate, Link } from "react-router-dom";
import "./StudentDashboard.css";

export default function StudentDashboard() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState(""); // Search input state
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await api.get("/courses/all"); // Fetch all courses
      setCourses(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEnroll = (courseId) => {
    navigate(`/request/${courseId}`);
  };

  // Filter courses based on search term
  const filteredCourses = courses.filter((c) =>
    c.courseName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="student-dashboard">
      <h2>Student Dashboard</h2>
      <p>Browse courses and send a request to the tutor.</p>

      {/* Link to Approved Courses */}
      <div className="approved-link">
        <Link to="/student/approved">View Approved Courses</Link>
      </div>

      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Courses */}
      <div className="courses">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((c) => (
            <CourseCard
              key={c._id}
              course={c}
              onApply={() => handleEnroll(c._id)}
            />
          ))
        ) : (
          <p>No courses found.</p>
        )}
      </div>
    </div>
  );
}
