import React from 'react'
import { useParams } from 'react-router'
import './Category.css'

export default function Category({ postList }) {
  const { id } = useParams()
  const posts = postList.filter(post => post.category_id === +id)
  
  return (
    <>
      {posts && posts.map(post => {
        return (
          <div className="activity-box">
            <p>Activity: {post.activity}</p>
            <br/>
            <br/>
            <img className="category-image" src={post.img_url} />
            
            <br/>
            <p>Materials: {post.materials}</p>
            <br />
            <br />
            <p>Instructions: {post.instructions}</p>
            <br/>
            <p>Description: {post.description}</p>
            <br/>
            <p>Resources: {post.resources ? post.resources : "No Resources Provided"} </p>
          </div>
        )
      })}
    </>
  )
}
