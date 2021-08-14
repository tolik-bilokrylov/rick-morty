import React from 'react';

function EpisodesForm({ page, setPage }) {
  // const statusByStatus = (event) => {
  //   console.log(event.target.value)
  //   setStatusStatus(event.target.value)
  // };

  return (
    <form>
      <button
        className="button"
        type="button"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        PRE
      </button>
      <button
        className="button"
        type="button"
        disabled={page === 3}
        onClick={() => setPage(page + 1)}
      >
        NEXT
      </button>
    </form>
  )
}

export default EpisodesForm;