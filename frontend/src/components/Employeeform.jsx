import React, { useState } from "react";
import axios from "axios";

const Employeeform = () => {
  const [employeeData, setEmployeeData] = useState({
    name: "",
    email: "",
    address: ""
  });

  const handleChange = (e) => {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  };

  const addEmployee = () => {
    axios.post("http://localhost:5000/api/employees", employeeData)
      .then((res) => {
        alert(res.data.message);
        // Optionally, update the employee list after adding a new employee
        // fetchEmployeeList(); // You may define fetchEmployeeList function to update the list
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} />
        <button type="button" onClick={addEmployee}>Add Employee</button>
      </form>
    </div>
  );
};

export default Employeeform;
