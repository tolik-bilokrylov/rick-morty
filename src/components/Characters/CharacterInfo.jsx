import React from 'react';

export function CharacterInfo({ active, setActive, name, status, species, type, gender, img }) {
  return (
    <div
      className={active ? "modal-character active" : "modal-character"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "character-content active" : "character-content"}
        onClick={element => element.stopPropagation()}
      >
        <img  src={img} alt="character" />
        <h1>{name}</h1>
        <p className="character-full">
          {status}
        </p>
        <p className="character-full">
          {species}
        </p>
        <p className="character-full">
          {type}
        </p>
        <p className="character-full">
          {gender}
        </p>
      </div>
    </div>
  )
};