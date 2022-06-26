import React from "react";
import { NavLink } from "react-router-dom";

import "./pagination.css";

function Pagination({ currentPage, pages }) {
  console.log(currentPage);
  const addBtns = () => {
    let content = [];
    const limit = 2;

    content.push(
      <NavLink key="prev" to="/characters">
        <button className="btn" type="button">
          prev
        </button>
      </NavLink>
    );

    for (let i = currentPage; i <= currentPage + limit; i++) {
      content.push(
        <NavLink key={i} to="/characters">
          <button
            className={currentPage === i ? "btn active-btn" : "btn"}
            type="button"
          >
            {i}
          </button>
        </NavLink>
      );
    }

    if (currentPage !== pages) {
      content.push(
        <NavLink key="next" to="/characters">
          <button className="btn" type="button">
            next
          </button>
        </NavLink>
      );
    }

    return content;
  };
  return <div className="btns-container">{addBtns()}</div>;
}

export default Pagination;
