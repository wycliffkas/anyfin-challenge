import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import SignUpForm from "../components/SignUpForm";

const Signup = () => {
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });

  const handleInputChange = (event) => {
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSaveUser = (event) => {
    event.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:8080",
      headers: {
        "Content-Type": "application/json",
      },
      data: inputs,
    })
      .then((res) => {
        setInputs({ name: "", email: "", password: "" });
        toast.success("User has been successfully registered");
      })
      .catch((errors) => {
        setInputs({ name: "", email: "", password: "" });
        if (errors.response.status === 400) {
          toast.error("Failed! Email is already in use!");
        } else {
          toast.error("Error registering user, check details entered!");
        }
      });
  };

  return (
    <div>
      <SignUpForm
        handleInputChange={handleInputChange}
        inputs={inputs}
        onHandleSaveUser={handleSaveUser}
      />
    </div>
  );
};

export default Signup;
