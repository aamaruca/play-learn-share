import { useState, useEffect } from "react";
import { getAllCategories } from "../../services/categories";
import { getAllPosts, postPost } from "../../services/posts";
import { Route, Switch, useHistory } from "react-router-dom";
import Home from '../../screens/home/Home'
import Posts from "../../screens/posts/Posts";
import Category from "../../screens/cateogory/Category";
import Create from "../../screens/create/Create"

export default function MainContainer() {
  const [postList, setPostList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const history = useHistory()

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
    const postData = await postPost(formData)
    setPostList((prevState) => [...prevState, postData])
    history.push('/posts')
  }

  return (
    <Switch>
      <Route path="/category/:id">
        <Category postList={postList}/>
      </Route>
      <Route path="/posts/create">
        <Create
          handleCreate={handleCreate
          }
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
