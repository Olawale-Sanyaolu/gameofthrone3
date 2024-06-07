// src/components/PageSizeDropdown.js
import React from 'react';

const PageSizeDropdown = ({ pageSize, onPageSizeChange }) => (
  <select value={pageSize} onChange={(e) => onPageSizeChange(Number(e.target.value))}>
    <option value="10">10</option>
    <option value="20">20</option>
    <option value="50">50</option>
    <option value="100">100</option>
  </select>
);

export default PageSizeDropdown;