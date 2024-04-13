import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addHandler = () => {
    console.log(user);
    axios.post("http://localhost:5000/api/users/login", user)
      .then((res) => {
        alert(res.data.message);
        navigate("/main");
      })
      .catch((err)=>{
        console.log(err)  
      })
  };
  
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      style={{ margin: "10% 20% 30% 40%" }}
    >
      <Typography variant="h5" style={{ color: "darkblue" }}>
        Employee Management System Login
      </Typography>
      <div>
        <TextField
          id="outlined-required"
          label="Username"
          name="username"
          onChange={inputHandler}
        />
      </div>
      <div>
        <TextField
          id="outlined-disabled"
          label="Password"
          type="password"
          name="password"
          onChange={inputHandler}
        />
      </div>
      <Button variant="contained" color="primary" onClick={addHandler}>
        Login
      </Button>
      <br />
      <br />
      <br />
      <Typography>
        New users, please <Link to={"/sign"}>Sign Up</Link> here
      </Typography>
    </Box>
  );
};

export default Login;
