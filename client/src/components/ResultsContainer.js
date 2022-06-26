import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPostsBySearch } from "../actions/posts";
import Post from "./Post";
import PaginationSearch from "./PaginationSearch";

import "./post.css";

function ResultsContainer() {
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  const dispatch = useDispatch();

  let query = useQuery();

  useEffect(() => {
    dispatch(getPostsBySearch(query.get("searchQuery")));
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [dispatch, query]);

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

        <PaginationSearch
          currentPage={myState.posts.page}
          pages={myState.posts.pages}
        />
      </div>
    );
  }
}

export default ResultsContainer;
