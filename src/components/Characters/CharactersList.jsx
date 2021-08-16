import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Character } from './Character';
import { Buttons } from '../Buttons';
import { CharacterForm } from './CharactersForm';

import './CharactersList.css';

import { urlCharacters } from '../../api/api';

export function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [statusGender, setStatusGender] = useState("all")
  const [statusSpecies, setStatusSpecies] = useState("all")
  const [statusStatus, setStatusStatus] = useState("all")
  const [page, setPage] = useState(1);

  let pageCharacters = `${urlCharacters}/?page=${page}`;
  
  useEffect(() => {
    axios.get(pageCharacters)
      .then((response) => {
        const result = (response.data);
        setCharacters(result.results);
        setInfo(result.info);
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
    <div className="field">
      <Buttons
        page={page}
        setPage={setPage}
        pages={info.pages}
        prev={info.prev}
      />
      <CharacterForm
        setStatusGender={setStatusGender}
        setStatusSpecies={setStatusSpecies}
        setStatusStatus={setStatusStatus}
      />
      <div
        className="container"
      >
        {filterCharacters.map(character => (
          <Character
            key={character.id}
            character={character}
          />
        ))}
      </div>
    </div>
  );
};