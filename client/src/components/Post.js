import React from "react";

function Post({ post }) {
  return (
    <div>
      <h1>{post.name}</h1>
      <h2>{post.greeting}</h2>
    </div>
  );
}

export default Post;
