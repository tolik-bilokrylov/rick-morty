import React from 'react';

function Character({ id, name, status, species, type, gender, img }) {
  return (
    <div key={id}>
      <p>
        {name}
      </p>
      <p>
        {status}
      </p>
      <p>
        {species}
      </p>
      <p>
        {type}
      </p>
      <p>
        {gender}
      </p>
      <img src={img} alt="character" />
    </div>
  )
}

export default Character;
