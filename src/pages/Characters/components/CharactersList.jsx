import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';
// import CharacterInfo from './CharacterInfo';

// import { getCharacter } from './api/api';
// import { BASE_URL } from './api/api';



function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [statusGender, setStatusGender] = useState("all")
  const [statusSpecies, setStatusSpecies] = useState("all")
  const [statusStatus, setStatusStatus] = useState("all")
  const [filterCharacters, setFilterCharacters] = useState([]);

  const url = 'https://rickandmortyapi.com/api/character'
  
  useEffect(() => {
    axios.get(url)
      .then((response) => {
        console.log(response.data.results);
        setCharacters(response.data.results)
      })
  }, [url]);

  // useEffect(() => {
  //   filterByGender();
  //   filterBySpecies();
  //   filterByStatus();
  // }, [characters, statusGender, statusSpecies, statusStatus]);

  useEffect(() => {
    filterByGender();
  }, [characters, statusGender]);


  useEffect(() => {
    filterBySpecies();
  }, [characters, statusSpecies]);

  useEffect(() => {
    filterByStatus();
  }, [characters, statusStatus]);

  console.log(statusGender, statusSpecies, statusStatus);


  const filterByGender = () => {
    switch(statusGender) {
      case "male":
        setFilterCharacters(characters.filter(character => character.gender === "Male"));
        break;
      case "female":
        setFilterCharacters(characters.filter(character => character.gender === "Female"));
        break;
      default:
        setFilterCharacters(characters);
        break; 
    }
  };

  const filterBySpecies = () => {
    switch(statusSpecies) {
      case "human":
        setFilterCharacters(characters.filter(character => character.species === "Human"));
        break;
      case "aline":
        setFilterCharacters(characters.filter(character => character.species === "Alien"));
        break;
      default:
        setFilterCharacters(characters);
        break; 
    }
  };

  const filterByStatus = () => {
    switch(statusStatus) {
      case "alive":
        setFilterCharacters(characters.filter(character => character.status === "Alive"));
        break;
      case "dead":
        setFilterCharacters(characters.filter(character => character.status === "Dead"));
        break;
      case "unknown":
        setFilterCharacters(characters.filter(character => character.status === "unknown"));
        break;
      default:
        setFilterCharacters(characters);
        break; 
    }
  };
  
  const statusByGender = (event) => {
    console.log(event.target.value)
    setStatusGender(event.target.value)
  };
  const statusBySpecies = (event) => {
    console.log(event.target.value)
    setStatusSpecies(event.target.value)
  };
  const statusByStatus = (event) => {
    console.log(event.target.value)
    setStatusStatus(event.target.value)
  };
  
  return (
    <>
      <div className="select">
        <select
          onChange={statusByGender}
          name="characters"
          className="filter-character"
        >
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="select">
        <select
          onChange={statusBySpecies}
          name="characters"
          className="filter-character"
        >
          <option value="all">All</option>
          <option value="human">Human</option>
          <option value="aline">Alien</option>
        </select>
      </div>
      <div className="select">
        <select
          onChange={statusByStatus}
          name="characters"
          className="filter-character"
        >
          <option value="all">All</option>
          <option value="dead">Dead</option>
          <option value="alive">Aliev</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
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