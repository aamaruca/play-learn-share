import React from 'react'
import { useParams } from 'react-router'

export default function Category({ postList }) {
  const { id } = useParams()
  const posts = postList.filter(post => post.category_id === +id)
  
  return (
    <div>
      {posts && posts.map(post => {
        return (
          <p>{post.activity}</p>
        )
      })}
    </div>
  )
}
