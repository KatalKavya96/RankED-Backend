const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  subject: String,
  chapter: String,
  question: String,
  options: [String],
  answer: String,
  difficulty: String,
  shift: String,
  year: Number,
  explanation: String,
  source: String
});

module.exports = mongoose.model('Question', questionSchema);
