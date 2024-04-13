import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Main from './components/Main';
import Navbar from './components/Navbar';
import EmployeeForm from './components/Employeeform';
import EmployeeList from './components/Employeelist';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign" element={<Signup />} />
          <Route path="/main" element={<Main />}>
            <Route path="/main" element={<Navbar />} />
            <Route path="/main/employeeform" element={<EmployeeForm />} />
            <Route path="/main/employeelist" element={<EmployeeList />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

