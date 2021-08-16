import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';

export const Watch = ({ todos, completeTodo, removeTodo }) => {

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete
        ? 'todo-row complete'
        : 'todo-row'}
      key={index}
    >
      <div key={todo.id}>
        {todo.text}
      </div>
      <div className='icons'>
        <FaCheck
          key={todo.id}
          onClick={() => completeTodo(todo.id)}
          className='icon-style'
        />
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='icon-style'
        />
      </div>
    </div>
  ));
};