import React from 'react';

function LocationsForm({ name, type, dimension, setName, setType, setDimension }) {

  return (
    <form className="form-locations">
      <input
        className="input-location"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Search by Name"
      />
      <input
        className="input-location"
        type="text"
        value={type}
        onChange={(event) => setType(event.target.value)}
        placeholder="Search by Type"
      />
      <input
        className="input-location"
        type="text"
        value={dimension }
        onChange={(event) => setDimension(event.target.value)}
        placeholder="Search by Dimension"
      />
      </form>
  )
}

export default LocationsForm;