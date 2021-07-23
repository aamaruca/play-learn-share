import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
  return (
    <div>
      <img className='logo' src='https://i.imgur.com/U8JDexGl.png' />
      <br/>
      <Link to='/login'> Login </Link>
      <br/>
      <Link to ='/join'> Join </Link>
      
    </div>
  )
}
