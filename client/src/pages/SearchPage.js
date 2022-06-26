import React from "react";
import ResultsContainer from "../components/ResultsContainer";
import SearchBar from "../components/searchBar/SearchBar";

function SearchPage() {
  return (
    <div>
      <SearchBar />
      <ResultsContainer />
    </div>
  );
}

export default SearchPage;
