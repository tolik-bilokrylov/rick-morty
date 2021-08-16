import React from 'react';

export function CharacterInfo({ active, setActive, name, status, species, type, gender, img, location }) {
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
        <p className={status === "Alive" ? "character-full norm" : "character-full bad"}>
          Status:&nbsp;
          {status}
        </p>
        <p className="character-full">
          Species:&nbsp;
          {species}
        </p>
        <p className="character-full">
          {type}
        </p>
        <p className="character-full">
          Gender:&nbsp;
          {gender}
        </p>
        <p className="character-full">
          Location:&nbsp;
          {location}
        </p>
      </div>
    </div>
  )
};