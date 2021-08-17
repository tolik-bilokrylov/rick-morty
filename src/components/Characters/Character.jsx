import React, { useState } from 'react';
import { CharacterInfo } from './CharacterInfo';

export function Character({ character }) {
  const [modalActive, setModalActive] = useState(false);
  const { id, name, image, status, species, type, gender, location } = character;
  
  return (
    <div
      className="card"
      key={id}
    >
      <img
        className="image"
        src={image}
        alt="character"
        onClick={() => setModalActive(true)}
      />
      <h1
        className="title"
        style={{color: 'black'}}
      >
        {name}
      </h1>
      <CharacterInfo
        active={modalActive}
        setActive={setModalActive}
        key={id}
        status={status}
        species={species}
        type={type}
        gender={gender}
        name={name}
        img={image}
        location={location.name}
      />
    </div>
  )
};
