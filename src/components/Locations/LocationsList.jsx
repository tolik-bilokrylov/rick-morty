import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Location from './Location';
import LocationsForm from './LocationsForm';

import { urlLocations } from '../../api/api';

function LocationsList() {
  const [locations, setLocations] = useState([]);
  // const [statusGender, setStatusGender] = useState("all")
  // const [statusSpecies, setStatusSpecies] = useState("all")
  // const [statusStatus, setStatusStatus] = useState("all")
  const [page, setPage] = useState(1);

  let pageLocations = `${urlLocations}/?page=${page}`;
  
  useEffect(() => {
    axios.get(pageLocations)
      .then((response) => {
        const result = (response.data);
        setLocations(result.results)
      })
  }, [pageLocations]);

  // const filterCharacters = useMemo(() => {
  //   let result = characters;

  //   if (statusGender === "all") {
  //     result = result.filter(character => character.gender !== undefined);
  //   }

  //   if (statusGender === "male") {
  //     result = result.filter(character => character.gender === "Male");
  //   }

  //   if (statusGender === "female") {
  //     result = result.filter(character => character.gender === "Female");
  //   }

  //   if (statusGender === "unknown") {
  //     result = result.filter(character => character.gender === "unknown");
  //   }

  //   if (statusSpecies === "all") {
  //     result = result.filter(character => character.species !== undefined);
  //   }

  //   if (statusSpecies === "human") {
  //     result = result.filter(character => character.species === "Human");
  //   }

  //   if (statusSpecies === "alien") {
  //     result = result.filter(character => character.species === "Alien");
  //   }

  //   if (statusStatus === "all") {
  //     result = result.filter(character => character.status !== undefined);
  //   }

  //   if (statusStatus === "dead") {
  //     result = result.filter(character => character.status === "Dead");
  //   }

  //   if (statusStatus === "alive") {
  //     result = result.filter(character => character.status === "Alive");
  //   }
    
  //   if (statusStatus === "unknown") {
  //     result = result.filter(character => character.status === "unknown");
  //   }

  //   return result;
  // }, [characters, statusGender, statusSpecies, statusStatus]);
  
  return (
    <>
      <LocationsForm
        // setStatusGender={setStatusGender}
        // setStatusSpecies={setStatusSpecies}
        // setStatusStatus={setStatusStatus}
        page={page}
        setPage={setPage}
      />
      <div
        className="locations"
      >
        {locations.map(location => (
          <Location
            key={location.id}
            name={location.name}
            type={location.type}
            dimension={location.dimension}
            created={location.created}
          />
        ))}
      </div>
    </>
  );
};

export default LocationsList;