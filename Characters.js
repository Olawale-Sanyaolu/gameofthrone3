import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../services/api';
import Pagination from './Pagination';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters(currentPage, pageSize);
      setCharacters(data);
      setTotalPages(Math.ceil(data.length / pageSize));
    };
    getCharacters();
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
      <h1>Characters</h1>
      <ul>
        {characters.map(character => (
          <li key={character.url}>
            <span>{character.name || character.aliases[0]}</span>
            <span>{character.culture}</span>
            <span>{character.gender === 'Male' ? '♂️' : '♀️'}</span>
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

export default Characters;