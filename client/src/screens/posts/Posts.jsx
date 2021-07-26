import React from "react";
import { Link } from 'react-router-dom'

export default function Posts({ postList , }) {
  return (
    <div>
      <h3>All Posts</h3>
      {postList.map((post) => (
        <Link to={`/posts/${post.id}`}>
          <div>
          <p key={post.id}>{post.activity}</p>
          <img src={post.img_url} alt='title'/>
        </div>
        </Link>
      ))}
    </div>
  );
}
