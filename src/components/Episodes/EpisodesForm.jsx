import React from 'react';

function EpisodesForm({ name, setName }) {

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
}

export default EpisodesForm;