// src/components/ApprovedCourses.jsx
import React, { useEffect, useState } from "react";
import { api } from "../services/api";
import CourseCard from "./CourseCard";

export default function ApprovedCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchApproved = async () => {
      try {
        const res = await api.get("/courses/approved"); // Make sure backend route exists
        setCourses(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchApproved();
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "auto" }}>
      <h2>Approved Courses</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px", marginTop: "20px" }}>
        {courses.length > 0 ? (
          courses.map(c => <CourseCard key={c._id} course={c} />)
        ) : (
          <p>No approved courses available.</p>
        )}
      </div>
    </div>
  );
}
