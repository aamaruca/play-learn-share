import { useState, useEffect } from "react";
import { getAllCategories } from "../../services/categories";
import { getAllPosts, postPost, deletePost } from "../../services/posts";
import { Route, Switch, useHistory } from "react-router-dom";
import Home from "../../screens/home/Home";
import Posts from "../../screens/posts/Posts";
import Category from "../../screens/cateogory/Category";
import Create from "../../screens/create/Create";
import PostDetail from "../../screens/postDetail/PostDetail";
import EditPost from "../../screens/editPost/EditPost";

export default function MainContainer() {
  const [postList, setPostList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await getAllPosts();
      setPostList(postData);
    };
    const fetchCategories = async () => {
      const categoryData = await getAllCategories();
      setCategoryList(categoryData);
    };
    fetchPosts();
    fetchCategories();
  }, []);

  const handleCreate = async (formData) => {
    console.log(formData);
    // const postData = await postPost(formData)
    // setPostList((prevState) => [...prevState, postData])
    // history.push('/posts')
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    setPostList((prevState) => prevState.filter((post) => post.id !== id));
  };
  console.log();

  return (
    <Switch>
      <Route path="/category/:id">
        <Category postList={postList} />
      </Route>
      <Route path="/posts/:id">
        <PostDetail />
      </Route>
      <Route path="/create">
        <Create handleCreate={handleCreate} categoryList={categoryList} />
      </Route>
      <Route path="/edit">
        <EditPost 
          handleDelete={handleDelete}
        />
      </Route>
      <Route path="/posts">
        <Posts postList={postList} />
      </Route>
      <Route path="/">
        <Home categoryList={categoryList} />
      </Route>
    </Switch>
  );
}
