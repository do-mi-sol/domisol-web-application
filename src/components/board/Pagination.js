import React from "react";
import _ from "lodash";
import "../../assets/css/Board.css";

const Pagination = ({ pageSize, itemsCount, currentPage, onPageChange }) => {
    const pageCount = Math.ceil(itemsCount / pageSize);

    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);

    return (
        <nav>
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        key={page}
                        className={page === currentPage ? "page-item active" : "page-item"}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="page-link" onClick={() => onPageChange(page)}>
                            {page}
                        </div>{" "}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
