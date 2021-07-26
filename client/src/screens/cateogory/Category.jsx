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
            <p className='title'>Activity: {post.activity}</p>
            <img className="category-image" src={post.img_url} />
          </div>
        )
      })}
    </>
  )
}
