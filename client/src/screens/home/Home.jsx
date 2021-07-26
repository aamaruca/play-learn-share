import React from 'react'
import { Link } from 'react-router-dom'


export default function Home({ categoryList }) {
  console.log(categoryList)
  return (
    <div>
      <h3>Sharing how our kids learn through play everyday!</h3>
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