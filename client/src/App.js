import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPosts } from "./actions/posts";
import Post from "./components/Post";

import "./app.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts);

  return (
    <div className="app">
      {posts.map((post, i) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default App;
