import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Category({ postList }) {
  const { id } = useParams();
  const posts = postList.filter((post) => post.category_id === +id);
  console.log(postList);
  return (
    <div className="activity-container">
      {posts &&
        posts.map((post) => {
          return (
            <>
              <Link to={`/posts/${post.id}`}>
                <div className="activity-card">
                  <p className="title">Activity: {post.activity}</p>
                  <img
                    className="activity-image"
                    src={post.img_url}
                    alt="title"
                  />
                </div>
              </Link>
            </>
          );
        })}
    </div>
  );
}
