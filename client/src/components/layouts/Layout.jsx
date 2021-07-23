import React from "react";
import Navbar from '../navbar/Navbar';

export default function Layout(props) {
  return (
    <div>
      <Navbar/>
      <header>
          <h3></h3>
      </header>

      {props.children}
    </div>
  );
}
