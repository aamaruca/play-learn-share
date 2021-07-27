import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ currentUser, handleLogout }) {
  return (
    <nav className="nav">
      <Link to="/">
        <img
          className="logo"
          src="https://i.imgur.com/T2jooUr.png?1"
          alt="title"
        />
      </Link>
      <br />

      {currentUser ? (
        <div className="nav-info">
          <p className="greeting">Hello, {currentUser.username}!</p>
          <div className="logged-in-links">
            <Link className="logout" to="/">
              <div onClick={handleLogout}>
                Logout
              </div>
            </Link>
            <Link classname="create" to="/create">
              Create
            </Link>
          </div>
        </div>
      ) : (
        <div className="nav-links">
          <br />
          <Link className="login" to="/login">
            Login
          </Link>
          <br />
          <Link className="join" to="/join">
            Join
          </Link>
        </div>
      )}
    </nav>
  );
}
