const DataModal = require("../models/mongodb");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await DataModal.find({});
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.pushData = async (req, res) => {
  try {
    const newUser = new DataModal(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
