import React, { useState } from 'react';
import CharacterInfo from './CharacterInfo';



function Character({ id, name, img, status, species, type, gender }) {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div
      className="card"
      key={id}
    >
      <img
        className="image"
        src={img}
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
        img={img}
      />
    </div>
  )
}

export default Character;
