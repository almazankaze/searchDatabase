import React from "react";
import PostsContainer from "../components/PostsContainer";
import SearchBar from "../components/searchBar/SearchBar";

function Characters() {
  return (
    <div>
      <SearchBar />
      <PostsContainer />
    </div>
  );
}

export default Characters;
