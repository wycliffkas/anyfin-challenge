import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ handleLogout }) => {
  const user = localStorage.getItem("user");
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <NavLink class="navbar-brand" to="/">
            Anyfin
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" />
            <span class="navbar-text">Welcome, {user}</span>
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
