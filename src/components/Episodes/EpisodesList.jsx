import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Episode from './Episode';
import EpisodesForm from './EpisodesForm';
// import CharacterInfo from './CharacterInfo';

import { urlEpisodes } from '../../api/api';

function EpisodessList() {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);

  let pageEpisodes = `${urlEpisodes}/?page=${page}`;
  
  useEffect(() => {
    axios.get(pageEpisodes)
      .then((response) => {
        const result = (response.data);
        setEpisodes(result.results)
      })
  }, [pageEpisodes]);
  
  return (
    <>
      <EpisodesForm
        page={page}
        setPage={setPage}
      />
      <div
        className="episodes"
      >
        {episodes.map(episode => (
          <Episode
            key={episode.id}
            name={episode.name}
            air_date={episode.air_date}
            episode={episode.episode}
            created={episode.created}
          />
        ))}
      </div>
    </>
  );
};

export default EpisodessList;