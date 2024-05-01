const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  title: String,
  content: String,
  email: String,
  image: String,
});

const SchemaModal = mongoose.model("users", Schema);

module.exports = SchemaModal;
