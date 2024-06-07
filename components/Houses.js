// src/components/Houses.js
import React, { useState, useEffect } from 'react';
import { getHouses } from '../services/api';
import Pagination from './Pagination';
import PageSizeDropdown from './PageSizeDropdown';
import { Link } from 'react-router-dom';

const Houses = () => {
  const [houses, setHouses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getHouses(currentPage, pageSize).then(response => {
      setHouses(response.data);
      // Assuming the API returns a header with total number of pages
      setTotalPages(Math.ceil(response.headers['x-total-count'] / pageSize));
    });
  }, [currentPage, pageSize]);

  return (
    <div>
      <h2>Houses</h2>
      <PageSizeDropdown pageSize={pageSize} onPageSizeChange={setPageSize} />
      <ul>
        {houses.map(house => (
          <li key={house.url}>
            <Link to={`/houses/${house.url.split('/').pop()}`}>
              {house.name} - Titles: {house.titles.join(', ')}
              {house.currentLord && <div>Current Lord: {house.currentLord}</div>}
              {house.swornMembers.length > 0 && <div>Sworn Members: {house.swornMembers.join(', ')}</div>}
            </Link>
          </li>
        ))}
      </ul>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default Houses;