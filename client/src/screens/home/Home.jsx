import React from 'react'
import { Link } from 'react-router-dom'


export default function Home({ categoryList }) {
  console.log(categoryList)
  return (
    <div>
      <h3>Intro</h3>
      <Link to='/posts'><button> Browse All </button></Link>
      {categoryList && categoryList.map(category => {
        return (
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        )
      })
      
      }
    </div>
  )
}