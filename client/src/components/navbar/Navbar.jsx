import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(props) {
 const {currentUser} = props

  return (
    <div className='nav'>
      <img className="logo" src="https://i.imgur.com/eRKYkhDm.png?1" alt="title"/>
      <br />
      {currentUser ? (
        <div className='nav-info' >
          <p className='intro'>Hello, {currentUser.username}!</p>
          <Link className='create' to='/create'> Create </Link>
          <button className='logout'>Logout</button>
        </div>
      ) : 
        <div className='nav-links'>
          <br/>
          <Link to="/login"> Login </Link>
          <br/>
          <Link to="/join"> Join </Link>
        </div>
      }
    </div>
  );
}
