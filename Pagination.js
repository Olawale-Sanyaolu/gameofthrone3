import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange, onPageSizeChange, pageSize }) => {
  return (
    <div className="pagination">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        &lt;
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        &gt;
      </button>
      <select value={pageSize} onChange={(e) => onPageSizeChange(Number(e.target.value))}>
        {[10, 20, 30, 40, 50].map(size => (
          <option key={size} value={size}>{size}</option>
        ))}
      </select>
    </div>
  );
};

export default Pagination;