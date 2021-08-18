import React from 'react';

export function CharacterForm({ setStatusGender, setStatusSpecies, setStatusStatus }) {
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
    <form className="form">
      <select
        className="select"
        onChange={statusByGender}
        name="characters"
      >
        <option value="all">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="unknown">unknown</option>
      </select>
      <select
        className="select"
        onChange={statusBySpecies}
        name="characters"
      >
        <option value="all">All</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </select>
      <select
        className="select"
        onChange={statusByStatus}
        name="characters"
      >
        <option value="all">All</option>
        <option value="dead">Dead</option>
        <option value="alive">Alive</option>
        <option value="unknown">unknown</option>
      </select>
    </form>
  )
};
