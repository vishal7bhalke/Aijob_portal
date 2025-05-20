import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  location: String,
  yearsOfExperience: Number,
  skills: [String],
  preferredJobType: String,
});

export default mongoose.model("User", userSchema);
