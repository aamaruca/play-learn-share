import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({currentUser, handleLogout}) {

  return (
    <div className='nav'>
      <img className="logo" src="https://i.imgur.com/eRKYkhDm.png?1" alt="title"/>
      <br />
      {currentUser ? (
        <div className='nav-info' >
          <p>Hello, {currentUser.username}!</p>
          <Link to='/create'> Create </Link>
          <button className='logout-btn' onClick={handleLogout}>Logout</button>
        </div>
      ) : 
        <div className='nav-info'>
          <br/>
          <Link to="/login"> Login </Link>
          <br/>
          <Link to="/join"> Join </Link>
        </div>
      }
    </div>
  );
}
