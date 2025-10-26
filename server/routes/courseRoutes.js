// import express from "express";
// import { addCourse, getAllCourses, getTutorCourses } from "../controllers/courseController.js";
// import { protect } from "../middleware/authMiddleware.js";
// const router = express.Router();

// router.get("/all", getAllCourses);
// router.post("/add", protect(['tutor']), addCourse);      // only tutors can add
// router.get("/my-courses", protect(['tutor']), getTutorCourses);

// export default router;
// //
import express from "express";
import { addCourse, getAllCourses, getTutorCourses, getApprovedCourses } from "../controllers/courseController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public: all courses
router.get("/all", getAllCourses);

// Tutor only: add a course
router.post("/add", protect(['tutor']), addCourse);

// Tutor only: get tutor's own courses
router.get("/my-courses", protect(['tutor']), getTutorCourses);

// Student: get approved courses
router.get("/approved", protect(['student']), getApprovedCourses);

export default router;
