import Request from "../models/Request.js";
import Course from "../models/Course.js";
import User from "../models/User.js";

export const addRequest = async (req, res) => {
  try {
    const { courseId, message } = req.body;
    const studentId = req.user.id;
    const student = await User.findById(studentId);
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    const request = await Request.create({
      studentId,
      studentName: student.name,
      studentEmail: student.email,
      tutorId: course.tutorId,
      courseId,
      message
    });
    res.json(request);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getRequestsForTutor = async (req, res) => {
  try {
    const tutorId = req.user.id;
    const requests = await Request.find({ tutorId }).sort({ createdAt: -1 }).populate("courseId", "courseName");
    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateRequestStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const request = await Request.findById(id);
    if (!request) return res.status(404).json({ message: "Request not found" });

    // ensure only the tutor who owns it can update
    if (String(request.tutorId) !== req.user.id) return res.status(403).json({ message: "Forbidden" });

    request.status = status;
    await request.save();
    res.json(request);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
