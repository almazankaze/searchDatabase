import React from "react";
import { NavLink } from "react-router-dom";

import "./pagination.css";

function Pagination({ currentPage, pages }) {
  const addBtns = () => {
    let content = [];
    let start = currentPage;
    let end = start + 2;

    if (currentPage > 1) start = currentPage - 1;
    if (pages - currentPage < 3) end = pages;

    if (currentPage !== 1) {
      content.push(
        <NavLink
          className="btn"
          key="prev"
          to={`/characters?page=${currentPage - 1}`}
        >
          prev
        </NavLink>
      );
    }

    for (let i = start; i <= end; i++) {
      content.push(
        <NavLink
          className={
            currentPage === i ? "btn num-btn active-btn" : "btn num-btn"
          }
          key={i}
          to={`/characters?page=${i}`}
        >
          {i}
        </NavLink>
      );
    }

    if (currentPage !== pages) {
      content.push(
        <NavLink
          className="btn"
          key="next"
          to={`/characters?page=${currentPage + 1}`}
        >
          next
        </NavLink>
      );
    }

    return content;
  };
  return <div className="btns-container">{addBtns()}</div>;
}

export default Pagination;
