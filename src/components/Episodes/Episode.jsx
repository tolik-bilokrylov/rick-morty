import React from 'react';

function Episode({ id, name, air_date, episode, created }) {
  return (
    <div key={id}>
      <p>
        {name}
      </p>
      <p>
        {air_date}
      </p>
      <p>
        {episode}
      </p>
      <p>
        {created}
      </p>
    </div>
  )
}

export default Episode;
