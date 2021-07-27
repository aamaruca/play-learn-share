import {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'
import { getOnePost } from '../../services/posts'
import { Link } from 'react-router-dom'
import "./PostDetail.css"


export default function PostDetail(props) {
  
  const [post, setPost] = useState()
  const { id } = useParams()
  const { handleDelete, categoryList } = props
  
  console.log(categoryList)
  useEffect(() => {
    const fetchPost = async () => {
      const postData = await getOnePost(id)
      setPost(postData)
    }
    fetchPost()
  }, [])



  return (
    <>
      <div className="detail-card">
        <Link to={`/category/${post?.category.id}`}><button>Back</button></Link>
      <h3>{post?.activity}</h3>
        <img src={post?.img_url} alt='title' />
        <br/>
      <p>Category: {post?.category.name}</p>
      {post?.materials ? <p>Materials: {post.materials}</p> : null}
      {post?.instructions ? <p>Instructions: {post.instructions}</p> : null}
      {post?.description ? <p >Description {post.description}</p> : null}
      {post?.resources ? <p>Resources: {post.resources}</p> : null}
      </div>
      <div clas>
        <Link to={`/posts/${post?.id}/edit`}><button>Edit</button></Link>
      <div className="delete-btn" onClick={()=> handleDelete(post?.id)}><i class="fas fa-trash-alt"></i></div>
      </div>
    </>
  )
}
