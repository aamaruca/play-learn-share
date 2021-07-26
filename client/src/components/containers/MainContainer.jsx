import { useState, useEffect } from "react";
import { getAllCategories } from "../../services/categories";
import { getAllPosts } from "../../services/posts";
import { Route, Switch } from "react-router-dom";
import Home from '../../screens/home/Home'
import Posts from "../../screens/posts/Posts";
import Category from "../../screens/cateogory/Category";

export default function MainContainer() {
  const [postList, setPostList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

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

  return (
    <Switch>
      <Route path="/category/:id">
        <Category postList={postList}/>
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
