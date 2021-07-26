import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({currentUser, handleLogout}) {

  return (
    <div className='nav'>
      <Link to="/"><img className="logo" src="https://i.imgur.com/U8JDexG.png?1" alt="title"/></Link>
      <br />
  
      {currentUser ? (
        <div className='nav-info' >
          <p>Hello, {currentUser.username}!</p>
          <Link to='/posts/create'> Create </Link>
          <Link to='/'><button className='logout-btn' onClick={handleLogout}>Logout</button></Link>
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
