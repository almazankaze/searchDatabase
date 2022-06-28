import React from "react";
import { useNavigate } from "react-router-dom";

import "./pagination.css";

function PaginationSearch({ currentPage, pages, search }) {
  let navigate = useNavigate();

  const handleBtn = (number) => {
    navigate(`/posts/search?searchQuery=${search}&page=${number}`);
  };

  const addBtns = () => {
    let content = [];
    let start = currentPage;
    let end = start + 2;

    if (currentPage > 1) start = currentPage - 1;
    if (pages - currentPage < 3) end = pages;

    if (currentPage !== 1) {
      content.push(
        <button
          className="btn"
          key="prev"
          onClick={() => handleBtn(currentPage - 1)}
        >
          prev
        </button>
      );
    }

    for (let i = start; i <= end; i++) {
      content.push(
        <button
          className={
            currentPage === i ? "btn num-btn active-btn" : "btn num-btn"
          }
          key={i}
          onClick={() => handleBtn(i)}
        >
          {i}
        </button>
      );
    }

    if (currentPage !== pages) {
      content.push(
        <button
          className="btn"
          key="next"
          onClick={() => handleBtn(currentPage + 1)}
        >
          next
        </button>
      );
    }

    return content;
  };
  return <div className="btns-container">{addBtns()}</div>;
}

export default PaginationSearch;
