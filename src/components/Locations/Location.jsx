import React from 'react';

function Location({ id, name, type, dimension, created }) {
  return (
    <div key={id}>
      <p>{name}</p>
      <p>{type}</p>
      <p>{dimension}</p>
      <p>{created}</p>
    </div>
  )
}

export default Location;
