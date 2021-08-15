import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import LocationsForm from './LocationsForm';
import Button from './Button';

import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './LocationList.css';

import { urlLocations } from '../../api/api';

function LocationsList() {
  const [locations, setLocations] = useState([]);
  const [info, setInfo] = useState({});
  // const [statusGender, setStatusGender] = useState("all")
  // const [statusSpecies, setStatusSpecies] = useState("all")
  // const [statusStatus, setStatusStatus] = useState("all")
  const [page, setPage] = useState(1);

  let pageLocations = `${urlLocations}/?page=${page}`;
  
  useEffect(() => {
    axios.get(pageLocations)
      .then((response) => {
        const result = (response.data);
        setLocations(result.results);
        setInfo(result.info)
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

  const headers = ["name", "type", "dimension", "created"]
  
  return (
    <>
      <Button
        page={page}
        setPage={setPage}
        prev={info.prev}
        pages={info.pages}
      />
      <LocationsForm
        // setStatusGender={setStatusGender}
        // setStatusSpecies={setStatusSpecies}
        // setStatusStatus={setStatusStatus}
        
      />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            {headers.map(title => (
              <th style={{textTransform: 'capitalize'}}>
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {locations.map(location => (
            <tr>
              {headers.map(key => (
                <td>{location[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default LocationsList;