import React from "react";
import { Link } from "react-router-dom";

const SignUpForm = ({ handleInputChange, inputs, onHandleSaveUser }) => {
  return (
    <div className="signup-form">
      <form onSubmit={onHandleSaveUser}>
        <h2>Sign Up</h2>
        <p>Please fill in this form to create an account!</p>
        <hr />
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Full names"
            value={inputs.name}
            onChange={handleInputChange}
            required="required"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="email"
            value={inputs.email}
            placeholder="Email"
            onChange={handleInputChange}
            required="required"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={inputs.password}
            onChange={handleInputChange}
            required="required"
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="hint-text">
        Already have an account? <Link to="/login">Login here</Link>
      </div>
    </div>
  );
};

export default SignUpForm;
