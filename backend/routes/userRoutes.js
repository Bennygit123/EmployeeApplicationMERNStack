// Backend/Routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userModel = require("../model/user");

router.use(express.json());

// Signup endpoint
router.post("/signup", async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await userModel(userData).save();
    res.status(200).json({ message: "User created successfully", newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating user" });
  }
});

// Login endpoint
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username: username });

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    if (user.password === password) {
      res.status(200).json({ message: "Login successful", user });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error logging in" });
  }
});

module.exports = router;
