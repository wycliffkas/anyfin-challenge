import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ handleLogout }) => {
  const user = localStorage.getItem("user");
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Anyfin
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" />
            <span className="navbar-text">Welcome, {user}</span>
            <ul className="navbar-nav mr-2  ml-3 mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link header-link"
                  to="/"
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
