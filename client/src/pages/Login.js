import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import LoginForm from "../components/LoginForm";

const Login = (props) => {
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const handleInputChange = (event) => {
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:8080/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: inputs,
    })
      .then((res) => {
        setInputs({ email: "", password: "" });
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", res.data.user);
        props.history.push("/");
      })
      .catch((errors) => {
        setInputs({ email: "", password: "" });
        toast.error("Error, wrong password or username!");
      });
  };

  return (
    <div>
      <LoginForm
        handleInputChange={handleInputChange}
        inputs={inputs}
        handleLogin={handleLogin}
      />
    </div>
  );
};

export default Login;
