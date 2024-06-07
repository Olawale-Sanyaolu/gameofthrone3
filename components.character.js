// src/components/Character.js
import React, { useState, useEffect } from 'react';
import { getCharacter, getHouse } from '../services/api';

const Character = ({ match }) => {
  const [character, setCharacter] = useState(null);
  const [father, setFather] = useState('');
  const [mother, setMother] = useState('');
  const [spouse, setSpouse] = useState('');
  const [allegiances, setAllegiances] = useState([]);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await getCharacter(match.params.id);
      setCharacter(response.data);
      if (response.data.father) {
        const fatherResponse = await getCharacter(response.data.father.split('/').pop());
        setFather(fatherResponse.data.name);
      }
      if (response.data.mother) {
        const motherResponse = await getCharacter(response.data.mother.split('/').pop());
        setMother(motherResponse.data.name);
      }
      if (response.data.spouse) {
        const spouseResponse = await getCharacter(response.data.spouse.split('/').pop());
        setSpouse(spouseResponse.data.name);
      }
      if (response.data.allegiances.length) {
        const allegiancePromises = response.data.allegiances.map(url => getHouse(url.split('/').pop()));
        const allegianceResponses = await Promise.all(allegiancePromises);
        setAllegiances(allegianceResponses.map(res => res.data.name));
      }
    };

    fetchCharacter();
  }, [match.params.id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div>
      <h2>{character.name || character.aliases.join(', ')}</h2>
      <p>Born: {character.born}</p>
      <p>Died: {character.died}</p>
      <p>Titles: {character.titles.join(', ')}</p>
      <p>Culture: {character.culture}</p>
      <p>Gender: {character.gender}</p>
      <p>Father: {father}</p>
      <p>Mother: {mother}</p>
      <p>Spouse: {spouse}</p>
      <p>Allegiances: {allegiances.join(', ')}</p>
    </div>
  );
};

export default Character;