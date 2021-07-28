import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home({ categoryList }) {
  return (
    <div className="home-container">
      <h3 className="slogan">
        Sharing how our kids learn through play everyday!
      </h3>
      {categoryList &&
        categoryList.map((category) => {
          return (
            <Link to={`/category/${category.id}`}>
              <button className="category-btn">{category.name}</button>
              <br />
            </Link>
          );
        })}
      <Link to="/posts">
        <button className="browse-btn"> Browse All </button>
      </Link>
    </div>
  );
}
