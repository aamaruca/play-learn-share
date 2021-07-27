import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getOnePost } from '../../services/posts'
import { Link } from 'react-router-dom'
import Category from '../cateogory/Category'


export default function PostDetail(props) {
  const [post, setPost] = useState()
  const { id } = useParams()
  const {handleDelete} = props
  
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
      <h3>{post?.activity}</h3>
        <img src={post?.img_url} alt='title' />
        {post?.category.name}
      {post?.materials ? <p>Materials: {post.materials}</p> : null}
      {post?.instructions ? <p>Instructions: {post.instructions}</p> : null}
      {post?.description ? <p >Description {post.description}</p> : null}
      {post?.resources ? <p>Resources: {post.resources}</p> : null}
      </div>
      <div clas>
        <Link to={`/posts/${post?.id}/edit`}><button>Edit</button></Link>
      <button onClick={()=> handleDelete(post?.id)}>Delete</button>
      </div>
    </>
  )
}
