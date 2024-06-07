// src/components/Characters.js
import React, { useState, useEffect } from 'react';
import { getCharacters } from '../services/api';
import Pagination from './Pagination';
import PageSizeDropdown from './PageSizeDropdown';
import { FaMale, FaFemale } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getCharacters(currentPage, pageSize).then(response => {
      setCharacters(response.data);
      // Assuming the API returns a header with total number of pages
      setTotalPages(Math.ceil(response.headers['x-total-count'] / pageSize));
    });
  }, [currentPage, pageSize]);

  return (
    <div>
      <h2>Characters</h2>
      <PageSizeDropdown pageSize={pageSize} onPageSizeChange={setPageSize} />
      <ul>
        {characters.map(character => (
          <li key={character.url}>
            <Link to={`/characters/${character.url.split('/').pop()}`}>
              {character.name || character.aliases.join(', ')} ({character.culture})
              {character.gender === 'Male' ? <FaMale /> : <FaFemale />}
            </Link>
          </li>
        ))}
      </ul>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default Characters;