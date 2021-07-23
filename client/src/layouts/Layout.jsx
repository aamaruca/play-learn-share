import React from 'react'

export default function Layout(props) {
  return (
    <div>
      <header>
        
        <h3>Play, Learn, Share!</h3>
      
      </header>
  
      {props.children}
    </div>
  )
}

