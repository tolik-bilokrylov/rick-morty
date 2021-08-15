import React, { useState, useEffect} from 'react';
import axios from 'axios';
import EpisodesForm from './EpisodesForm';
import Button from './Button';
// import CharacterInfo from './CharacterInfo';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { urlEpisodes } from '../../api/api';

function EpisodessList() {
  const [episodes, setEpisodes] = useState([]);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);

  let pageEpisodes = `${urlEpisodes}/?page=${page}`;
  
  useEffect(() => {
    axios.get(pageEpisodes)
      .then((response) => {
        const result = (response.data);
        setEpisodes(result.results);
        setInfo(result.info)
      })
  }, [pageEpisodes]);

  const headers = ["name", "air_date", "episode", "created"]
  
  return (
    <>
      <Button
        page={page}
        setPage={setPage}
        prev={info.prev}
        pages={info.pages}
      />
      <EpisodesForm
        
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
          {episodes.map(episode => (
            <tr>
              {headers.map(key => (
                <td>{episode[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default EpisodessList;