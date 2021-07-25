import React from "react";
import Navbar from '../navbar/Navbar';

export default function Layout(props) {
  const {currentUser, handleLogout} = props
  return (
    <div>
      <Navbar
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      <header>
      
      </header>

      {props.children}
    </div>
  );
}
