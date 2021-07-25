import React from "react";
import Navbar from '../navbar/Navbar';

export default function Layout(props) {
  const {currentUser} = props
  return (
    <div>
      <Navbar currentUser={currentUser}/>
      <header>
      
      </header>

      {props.children}
    </div>
  );
}
