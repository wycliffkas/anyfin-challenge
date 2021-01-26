import React from "react";
import { Link } from "react-router-dom";

const LoginForm = ({ handleInputChange, inputs, handleLogin }) => {
  return (
    <div className="signup-form">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <p>Please fill in this form to login!</p>
        <hr />
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            value={inputs.email}
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
          <button type="submit" className="btn btn-primary btn-lg">
            Login
          </button>
        </div>
      </form>
      <div className="hint-text">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default LoginForm;
