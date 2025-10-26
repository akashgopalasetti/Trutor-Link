import Course from "../models/Course.js";
import User from "../models/User.js";

export const addCourse = async (req, res) => {
  try {
    const { courseName, description, price, videoLink } = req.body;
    const tutorId = req.user.id;
    const tutor = await User.findById(tutorId);
    if (!tutor) return res.status(404).json({ message: "Tutor not found" });

    const course = await Course.create({
      tutorId,
      tutorName: tutor.name,
      courseName,
      description,
      price,
      videoLink
    });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getTutorCourses = async (req, res) => {
  try {
    const tutorId = req.user.id;
    const courses = await Course.find({ tutorId });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Get only approved courses
export const getApprovedCourses = async (req, res) => {
  try {
    const courses = await Course.find({ approved: true });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
