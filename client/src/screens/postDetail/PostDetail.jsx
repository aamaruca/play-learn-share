import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOnePost } from "../../services/posts";
import { Link } from "react-router-dom";
import "./PostDetail.css";

export default function PostDetail(props) {
  const [post, setPost] = useState();
  const { id } = useParams();
  const { handleDelete, categoryList } = props;

  console.log(categoryList);
  useEffect(() => {
    const fetchPost = async () => {
      const postData = await getOnePost(id);
      setPost(postData);
    };
    fetchPost();
  }, []);

  return (
    <>
      <div className="detail-card">
        <div className="detail-card-header">
          <Link to={`/category/${post?.category.id}`}>
            <div className="back-btn">
              <i class="fas fa-caret-square-left"></i>
            </div>
          </Link>
          <Link to="/">
            <div className="detail-home-btn">
              <i class="fas fa-home"></i>
            </div>
          </Link>
        </div>
          <h3 className="title">{post?.activity}</h3>
        <p className="category-name">{post?.category.name}</p>
        <img className="detail-image" src={post?.img_url} alt="title" />
        <br />
        {post?.materials ? (
          <p className="post-data"><b>Materials:</b> {post.materials}</p>
        ) : null}
        {post?.instructions ? (
          <p className="post-data">Instructions: {post.instructions}</p>
        ) : null}
        {post?.description ? (
          <p className="post-data">Description {post.description}</p>
        ) : null}
        {post?.resources ? (
          <p className="post-data">Resources: {post.resources}</p>
        ) : null}
      </div>

      <div clas>
        <Link to={`/posts/${post?.id}/edit`}>
          <button>Edit</button>
        </Link>
        <div className="delete-btn" onClick={() => handleDelete(post?.id)}>
          <i class="fas fa-trash-alt"></i>
        </div>
      </div>
    </>
  );
}
