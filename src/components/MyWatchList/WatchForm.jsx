import React, { useState, useEffect, useRef } from 'react';

export function WatchForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <>
        <input
          placeholder='Add a episode'
          value={input}
          onChange={handleChange}
          name='text'
          className='todo-input'
          ref={inputRef}
        />
        <button onClick={handleSubmit} className='todo-button'>
          Add episode
        </button>
      </>
    </form>
  );
};