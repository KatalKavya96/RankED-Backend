const User = require('../models/UserProgress');

// GET user by UID
exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ uid: req.params.uid });
    if (!user) return res.status(404).send("User not found");
    res.json(user);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

// GET user by username (for public profiles)
exports.getUserByUsername = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({
      username: user.username,
      email: user.email,
      college: user.college,
      location: user.location,
      linkedin: user.linkedin
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// POST new user
exports.createUser = async (req, res) => {
  const { uid, email } = req.body;
  try {
    const existing = await User.findOne({ uid });
    if (existing) return res.status(400).send("User already exists");

    const user = new User({
      uid,
      email,
      solvedQuestions: [],
      bookmarkedQuestions: [],
      submissionLog: {},
      correctSubmissions: 0
    });
    await user.save();
    res.status(201).send("User progress initialized");
  } catch (error) {
    res.status(500).send("Error creating user");
  }
};

// PATCH update user
exports.updateUser = async (req, res) => {
  const { uid } = req.params;
  try {
    const updated = await User.findOneAndUpdate(
      { uid },
      { $set: req.body },
      { new: true }
    );
    if (!updated) return res.status(404).send("User not found");
    res.json(updated);
  } catch (error) {
    res.status(500).send("Update failed");
  }
};
