import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

export default function Posts({ postList }) {
  return (
    <>
      <Link to="/">
        <div className="home">
          <i class="fas fa-home"></i>
        </div>
      </Link>
      <h3 className="title">Activities</h3>
      <div className="activity-container">
        {postList.map((post) => (
          <Link to={`/posts/${post.id}`}>
            <div className="activity-card">
              <p className="activity-name" key={post.id}>
                {post.activity}
              </p>
              <img className="activity-image" src={post.img_url} alt="title" />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
