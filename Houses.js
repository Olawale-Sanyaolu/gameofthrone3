import React, { useEffect, useState } from 'react';
import { fetchHouses } from '../services/api';
import Pagination from './Pagination';

const Houses = () => {
  const [houses, setHouses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getHouses = async () => {
      const data = await fetchHouses(currentPage, pageSize);
      setHouses(data);
      setTotalPages(Math.ceil(data.length / pageSize));
    };
    getHouses();
  }, [currentPage, pageSize]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (size) => {
    setPageSize(size);
    setCurrentPage(1); // reset to page 1
  };

  return (
    <div>
      <h1>Houses</h1>
      <ul>
        {houses.map(house => (
          <li key={house.url}>
            <span>{house.name}</span>
            <span>{house.titles.join(', ')}</span>
            <span>{house.currentLord && '👑'}</span>
            <span>{house.swornMembers.length > 0 && '🛡️'}</span>
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
        pageSize={pageSize}
      />
    </div>
  );
};

export default Houses;