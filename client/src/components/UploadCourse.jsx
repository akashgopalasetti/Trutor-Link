import React, { useState } from "react";
import axios from "axios";

const UploadCourse = () => {
  const [form, setForm] = useState({
    courseName: "",
    description: "",
    price: "",
    videoLink: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in as a tutor to upload courses.");
      setLoading(false);
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/courses/add", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setForm({ courseName: "", description: "", price: "", videoLink: "" });
      alert("Course uploaded successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to upload course. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "400px", margin: "20px auto" }}
    >
      <input
        type="text"
        name="courseName"
        placeholder="Course Name"
        value={form.courseName}
        onChange={handleChange}
        required
        style={{ display: "block", width: "100%", marginBottom: "10px" }}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        style={{ display: "block", width: "100%", marginBottom: "10px" }}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        required
        style={{ display: "block", width: "100%", marginBottom: "10px" }}
      />
      <input
        type="text"
        name="videoLink"
        placeholder="Video Link"
        value={form.videoLink}
        onChange={handleChange}
        style={{ display: "block", width: "100%", marginBottom: "10px" }}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Uploading..." : "Upload Course"}
      </button>
    </form>
  );
};

export default UploadCourse;
