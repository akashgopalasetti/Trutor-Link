import React, { useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "student" });
  const [error, setError] = useState("");
  const nav = useNavigate();

  const handle = (e) => setForm({...form, [e.target.name]: e.target.value});

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/register", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      if (res.data.user.role === "student") nav("/student/dashboard");
      else nav("/trutor/dashboard");
    } catch (err) { setError(err.response?.data?.message || "Error"); }
  };

  return (
    <div className="auth-form">
      <h2>Register</h2>
      <form onSubmit={submit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handle} required />
        <input name="email" placeholder="Email" value={form.email} onChange={handle} required />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handle} required />
        <select name="role" value={form.role} onChange={handle}>
          <option value="student">Student</option>
          <option value="tutor">Tutor</option>
        </select>
        <button type="submit">Register</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}
