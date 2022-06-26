import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./searchBar.css";

function SearchBar() {
  const [search, setSearch] = useState("");

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search.trim()) {
      navigate(`/posts/search?searchQuery=${search || "none"}`);
    }
  };

  return (
    <div className="search-container">
      <form
        className="search-form"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button className="search-btn" type="submit"></button>
      </form>
    </div>
  );
}

export default SearchBar;
