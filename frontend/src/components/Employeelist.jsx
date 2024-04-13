import React, { useEffect, useState } from "react";
import axios from "axios";

const Employeelist = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployeeList();
  }, []);

  const fetchEmployeeList = () => {
    axios.get("http://localhost:5000/api/employees")
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteEmployee = (id) => {
    axios.delete(`http://localhost:5000/api/employees/${id}`)
      .then((res) => {
        alert(res.data.message);
        // Optionally, update the employee list after deleting an employee
        // fetchEmployeeList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            {employee.name} - {employee.email} - {employee.address}
            <button type="button" onClick={() => deleteEmployee(employee._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employeelist;

