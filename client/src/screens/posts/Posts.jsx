import React from "react";

export default function Posts({ postList }) {
  return (
    <div>
      <h3>All Posts</h3>
      {postList.map((post, index) => (
        <div>
          <p key={index}>{post.activity}</p>
          <img src={post.img_url} alt='title'/>
        </div>
      ))}
    </div>
  );
}
