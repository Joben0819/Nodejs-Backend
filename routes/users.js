const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users");

router.get("/1", UserController.getAllUsers);

router.post("/2", async (req, res) => {
  const { name, password } = req.body;
  if (name && password) {
    UserController.pushData;
  } else {
    res.json({ data: "none" });
  }
});

module.exports = router;
