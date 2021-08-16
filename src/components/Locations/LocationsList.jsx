import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { LocationsForm } from './LocationsForm';
import { Buttons } from '../Buttons';
import { Table } from 'react-bootstrap';

import './LocationList.css';

import { urlLocations } from '../../api/api';

export function LocationsList() {
  const [locations, setLocations] = useState([]);
  const [info, setInfo] = useState({});
  const [name, setName] = useState("")
  const [type, setType] = useState("")
  const [dimension, setDimension] = useState("")
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

  const filterLocations = useMemo(() => {
    let result = locations;
    if (name) {
      result = result.filter((location) => location.name.toLowerCase().includes(name.toLowerCase()));
    }

    if (type) {
      result = result.filter((location) => location.type.toLowerCase().includes(type.toLowerCase()));
    }

    if (dimension) {
      result = result.filter((location) => location.dimension.toLowerCase().includes(dimension.toLowerCase()));
    }

    return result;
  }, [locations, name, type, dimension]);

  const headers = ["id", "name", "type", "dimension", "created"]
  
  return (
    <>
      <Buttons
        page={page}
        setPage={setPage}
        prev={info.prev}
        pages={info.pages}
      />
      <LocationsForm
        name={name}
        setName={setName}
        type={type}
        setType={setType}
        dimension={dimension}
        setDimension={setDimension}
      />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            {headers.map(title => (
              <th key={title} style={{textTransform: 'capitalize', color: 'yellow'}}>
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filterLocations.map(location => (
            <tr key={location.id}>
              {headers.map(key => (
                <td key={key}>{location[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};