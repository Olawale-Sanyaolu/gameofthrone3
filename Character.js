import React, { useEffect, useState } from 'react';
import { fetchCharacter } from '../services/api';

const Character = ({ match }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const getCharacter = async () => {
      const data = await fetchCharacter(match.params.id);
      setCharacter(data);
    };
    getCharacter();
  }, [match.params.id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div>
      <h1>{character.name || character.aliases[0]}</h1>
      <p>Culture: {character.culture}</p>
      <p>Born: {character.born}</p>
      <p>Died: {character.died}</p>
      <p>Titles: {character.titles.join(', ')}</p>
      <p>Father: {character.father}</p>
      <p>Mother: {character.mother}</p>
      <p>Spouse: {character.spouse}</p>
      <p>Allegiances: {character.allegiances.join(', ')}</p>
    </div>
  );
};

export default Character;