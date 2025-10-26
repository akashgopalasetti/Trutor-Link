import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import TutorDashboard from "./components/TutorDashboard";
import StudentDashboard from "./components/StudentDashboard";

import RequestForm from "./components/RequestForm";
import UploadCourse from "./components/UploadCourse";
import MyCourses from "./components/MyCourses";
import EnrolledStudents from "./components/EnrolledStudents";
import ApprovedCourses from "./components/ApprovedCourses";
import NotFound from "./components/NotFound";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/trutor/dashboard" element={<TutorDashboard/>} />

          {/* Tutor routes */}
          <Route path="/tutor/upload" element={<UploadCourse />} />
          <Route path="/tutor/courses" element={<MyCourses />} />
          <Route path="/tutor/enrolled" element={<EnrolledStudents />} />
          <Route path="/request/:id" element={<RequestForm />} />
          <Route path="/student/approved" element={<ApprovedCourses />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
