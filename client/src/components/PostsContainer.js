import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPage } from "../actions/posts";
import Post from "./Post";

import "./post.css";

function PostsContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPage(1));
  }, [dispatch]);

  const myState = useSelector((state) => state.posts);

  if (myState.posts.loading) return <div>Loading</div>;
  else {
    return (
      <div className="cards-container">
        <div className="cards">
          {myState.posts.result.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      </div>
    );
  }
}

export default PostsContainer;
