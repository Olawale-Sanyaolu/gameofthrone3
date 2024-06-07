const BASE_URL = 'https://anapioficeandfire.com/api';

export const fetchCharacters = async (page, pageSize) => {
  const response = await fetch(`${BASE_URL}/characters?page=${page}&pageSize=${pageSize}`);
  return response.json();
};

export const fetchCharacter = async (id) => {
  const response = await fetch(`${BASE_URL}/characters/${id}`);
  return response.json();
};

export const fetchHouses = async (page, pageSize) => {
  const response = await fetch(`${BASE_URL}/houses?page=${page}&pageSize=${pageSize}`);
  return response.json();
};

export const fetchHouse = async (id) => {
  const response = await fetch(`${BASE_URL}/houses/${id}`);
  return response.json();
};