import React from 'react';

function Character({ name, status, species, type, gender, img }) {
  return (
    <div>
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
