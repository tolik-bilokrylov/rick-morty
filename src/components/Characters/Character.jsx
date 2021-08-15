import React from 'react';

function Character({ id, name, status, species, type, gender, img }) {
  return (
    <div
      className="card"
      key={id}
    >
      <img
        className="image"
        src={img}
        alt="character"
      />
      <h1
        className="title"
        style={{color: 'black'}}
      >
        {name}
      </h1>
    </div>
  )
}

export default Character;
