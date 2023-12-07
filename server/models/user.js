const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String, enum: ["Male", "Female"], required: true },
  avatar: String,
  domain: String,
  available: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userSchema);
