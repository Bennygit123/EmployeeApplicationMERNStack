const express = require("express");
const router = express.Router();
const userModel = require("../model/user");

router.use(express.json());

// CRUD operations for employees

// Read operation - Get all employees
router.get("/employees", async (req, res) => {
  try {
    const employees = await userModel.find();
    res.status(200).json(employees);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error retrieving employees" });
  }
});

// Create operation - Add a new employee
router.post("/employees", async (req, res) => {
  try {
    const employeeData = req.body;
    const newEmployee = await userModel(employeeData).save();
    res.status(201).json({ message: "Employee created successfully", newEmployee });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating employee" });
  }
});

// Update operation - Update an existing employee
router.put("/employees/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEmployee = await userModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: "Employee updated successfully", updatedEmployee });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating employee" });
  }
});

// Delete operation - Delete an employee
router.delete("/employees/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await userModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting employee" });
  }
});

module.exports = router;
