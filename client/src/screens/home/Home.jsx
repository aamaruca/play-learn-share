import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h3>Intro</h3>
      <Link to='/posts'><button> Browse All </button></Link>
    </div>
  )
}
