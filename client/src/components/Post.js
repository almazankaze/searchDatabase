import React from "react";

function Post({ post }) {
  return (
    <div className="card">
      <div className="card-content">
        <img src={post.myImg} alt={post.name}></img>
        <h1>{post.name}</h1>
      </div>
    </div>
  );
}

export default Post;
