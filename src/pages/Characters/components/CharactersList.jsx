import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Character from './Character';
import CharacterForm from './CharactersForm';
// import CharacterInfo from './CharacterInfo';

import { urlCharacters } from '../../../api/api';

function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [statusGender, setStatusGender] = useState("all")
  const [statusSpecies, setStatusSpecies] = useState("all")
  const [statusStatus, setStatusStatus] = useState("all")
  const [page, setPage] = useState(1);

  let pageCharacters = `${urlCharacters}/?page=${page}`;
  
  useEffect(() => {
    axios.get(pageCharacters)
      .then((response) => {
        const result = (response.data);
        setCharacters(result.results)
      })
  }, [pageCharacters]);

  const filterCharacters = useMemo(() => {
    let result = characters;

    if (statusGender === "all") {
      result = result.filter(character => character.gender !== undefined);
    }

    if (statusGender === "male") {
      result = result.filter(character => character.gender === "Male");
    }

    if (statusGender === "female") {
      result = result.filter(character => character.gender === "Female");
    }

    if (statusGender === "unknown") {
      result = result.filter(character => character.gender === "unknown");
    }

    if (statusSpecies === "all") {
      result = result.filter(character => character.species !== undefined);
    }

    if (statusSpecies === "human") {
      result = result.filter(character => character.species === "Human");
    }

    if (statusSpecies === "alien") {
      result = result.filter(character => character.species === "Alien");
    }

    if (statusStatus === "all") {
      result = result.filter(character => character.status !== undefined);
    }

    if (statusStatus === "dead") {
      result = result.filter(character => character.status === "Dead");
    }

    if (statusStatus === "alive") {
      result = result.filter(character => character.status === "Alive");
    }
    
    if (statusStatus === "unknown") {
      result = result.filter(character => character.status === "unknown");
    }

    return result;
  }, [characters, statusGender, statusSpecies, statusStatus]);
  
  return (
    <>
      <CharacterForm
        setStatusGender={setStatusGender}
        setStatusSpecies={setStatusSpecies}
        setStatusStatus={setStatusStatus}
        page={page}
        setPage={setPage}
      />
      <div
        className="characters"
      >
        {filterCharacters.map(character => (
          <Character
            key={character.id}
            status={character.status}
            species={character.species}
            type={character.type}
            gender={character.gender}
            name={character.name}
            img={character.image}
          />
        ))}
      </div>
    </>
  );
};

export default CharactersList;