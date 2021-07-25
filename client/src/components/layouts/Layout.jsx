import React from "react";
import Navbar from '../navbar/Navbar';

export default function Layout(props) {
  const {currentUser, handleLogout} = props
  return (
    <div>
      <header>
      <Navbar
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      </header>
      {props.children}
    </div>
  );
}
