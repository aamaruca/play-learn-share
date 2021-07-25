import React from 'react'
import { Link } from 'react-router-dom'


export default function Home({ categoryList }) {
  console.log(categoryList)
  return (
    <div>
      <p>Welcome! Here we share our ideas of at home activities for our kids to enjoy and we watch them learn as they play! </p>
      <br/>
      {categoryList && categoryList.map(category => {
        return (
          <Link to={`/category/${category.id}`}><button>{category.name}</button><br/></Link>
        )
      })
    }
    <Link to='/posts'><button> Browse All </button></Link>
    </div>
  )
}