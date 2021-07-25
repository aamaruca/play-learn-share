import React from 'react'

export default function Posts({ postList }) {


  
  return (
    <div>
      <h3>All Posts</h3>
      {postList.map((post, index) =>
        <p key='index'>{post.activity}</p>
      )}
    </div>
  )
}
