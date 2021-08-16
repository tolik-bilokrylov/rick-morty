import React from 'react';
import './Buttons.css';

export function Buttons({ page, setPage, prev, pages }) {
  return (
    <div className="button-container">
      <button
        className="button"
        type="button"
        disabled={prev === null}
        onClick={() => setPage(page - 1)}
      >
        previous
      </button>
      <button
        className="button"
        type="button"
        disabled={page === pages}
        onClick={() => setPage(page + 1)}
      >
        next
      </button>
    </div>
  )
};
