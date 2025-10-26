import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  tutorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  tutorName: { type: String, required: true },
  courseName: { type: String, required: true },
  description: { type: String },
  price: { type: Number, default: 0 },
  videoLink: { type: String }
}, { timestamps: true });

export default mongoose.model("Course", courseSchema);
//