const mongoose = require('mongoose');

const userProgressSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  email: String,
  username: { type: String, unique: true },
  usernameLastChanged: Date,
  location: String,
  college: String,
  linkedin: String,
  solvedQuestions: [String],
  bookmarkedQuestions: [String],
  submissionLog: Object,
  correctSubmissions: Number,

  followers: [String],
  following: [String],
});

module.exports = mongoose.model('UserProgress', userProgressSchema);
