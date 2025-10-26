import express from "express";
import { addRequest, getRequestsForTutor, updateRequestStatus } from "../controllers/requestController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

// students add request
router.post("/add", protect(['student']), addRequest);

// tutors get their requests
router.get("/tutor", protect(['tutor']), getRequestsForTutor);

// tutor updates status
router.put("/:id", protect(['tutor']), updateRequestStatus);

export default router;
