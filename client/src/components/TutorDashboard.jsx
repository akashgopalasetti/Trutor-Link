import React, { useEffect, useState } from "react";
import { api } from "../services/api";
import "./TutorDashboard.css";

export default function TutorDashboard() {
  const [courses, setCourses] = useState([]);
  const [requests, setRequests] = useState([]);
  const [form, setForm] = useState({ courseName: "", description: "", price: 0, videoLink: "" });

  useEffect(()=> {
    fetchCourses();
    fetchRequests();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await api.get("/courses/my-courses");
      setCourses(res.data);
    } catch (err) { console.error(err); }
  };

  const fetchRequests = async () => {
    try {
      const res = await api.get("/requests/tutor");
      setRequests(res.data);
    } catch (err) { console.error(err); }
  };

  const addCourse = async (e) => {
    e.preventDefault();
    try {
      await api.post("/courses/add", form);
      setForm({ courseName: "", description: "", price: 0, videoLink: "" });
      fetchCourses();
    } catch (err) { alert(err.response?.data?.message || "Error"); }
  };

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/requests/${id}`, { status });
      fetchRequests();
    } catch (err) { console.error(err); }
  };

  return (
    <div>
      <h2>Tutor Dashboard</h2>
      <section className="add-course">
        <h3>Add Course</h3>
        <form onSubmit={addCourse}>
          <input placeholder="Course Name" value={form.courseName} onChange={e => setForm({...form, courseName: e.target.value})} required />
          <textarea placeholder="Description" value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
          <input type="number" placeholder="Price" value={form.price} onChange={e => setForm({...form, price: e.target.value})} />
          <input placeholder="Video Link (youtube)" value={form.videoLink} onChange={e => setForm({...form, videoLink: e.target.value})} />
          <button type="submit">Add Course</button>
        </form>
      </section>

      <section className="my-courses">
        <h3>My Courses</h3>
        {courses.map(c => (
          <div key={c._id} className="course-card">
            <h4>{c.courseName}</h4>
            <p>{c.description}</p>
            <p>Price: ₹{c.price}</p>
          </div>
        ))}
      </section>

      <section className="requests">
        <h3>Student Requests</h3>
        {requests.map(r => (
          <div key={r._id} className="request-card">
            <p><strong>Student:</strong> {r.studentName} ({r.studentEmail})</p>
            <p><strong>Course:</strong> {r.courseId?.courseName}</p>
            <p><strong>Message:</strong> {r.message}</p>
            <p><strong>Status:</strong> {r.status}</p>
            <div>
              <button onClick={() => updateStatus(r._id, "Approved")}>Approve</button>
              <button onClick={() => updateStatus(r._id, "Rejected")}>Reject</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
