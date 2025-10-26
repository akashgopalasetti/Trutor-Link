import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../services/api";

export default function RequestForm() {
  const { id } = useParams(); // course ID
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/requests/add", { courseId: id, message });
      alert("Request sent!");
      navigate("/student/dashboard"); // redirect after request
    } catch (err) {
      console.error(err);
      alert("Failed to send request");
    }
  };

  return (
    <div className="request-form">
      <h2>Enroll / Request Course</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Email or Mobile number"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send Request</button>
      </form>
    </div>
  );
}
