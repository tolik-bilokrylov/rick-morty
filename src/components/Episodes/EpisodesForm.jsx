import React from 'react';

export function EpisodesForm({ name, setName }) {

  return (
    <form className="form-episodes">
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Search by Name"
      />
    </form>
  )
};