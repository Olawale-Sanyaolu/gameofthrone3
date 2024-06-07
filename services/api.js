import axios from 'axios';

const API_BASE_URL = 'https://anapioficeandfire.com/api';

export const getBooks = () => axios.get(`${API_BASE_URL}/books/1`);

export const getCharacter = (id) => axios.get(`${API_BASE_URL}/characters/${id}`);

export const getCharacters = (page, pageSize) =>
  axios.get(`${API_BASE_URL}/characters`, {
    params: { page, pageSize }
  });

export const getHouse = (id) => axios.get(`${API_BASE_URL}/houses/${id}`);

export const getHouses = (page, pageSize) =>
  axios.get(`${API_BASE_URL}/houses`, {
    params: { page, pageSize }
  });