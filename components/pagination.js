// src/components/Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="pagination">
    <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
      &lt;
    </button>
    <span>Page {currentPage} of {totalPages}</span>
    <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
      &gt;
    </button>
  </div>
);

export default Pagination;
