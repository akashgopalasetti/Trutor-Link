import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="nav">
      <div className="nav-left">
        <h1>TutorLink</h1>
      </div>
      <div className="nav-right">
        {!token ? (
          <><Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <>
            {user?.role === "student" && <Link to="/student/dashboard">Dashboard</Link>}
            {user?.role === "tutor" && <Link to="/tutor/dashboard">Dashboard</Link>}
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
