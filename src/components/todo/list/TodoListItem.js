import React from 'react';

export const TodoListItem = ({ todo, index, dispatch }) => {

  const handleToggle = (e) => {
    e.preventDefault();
    dispatch({ type: "toggle", payload: {id: todo.id}})
  }

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch({ type: "delete", payload: {id: todo.id}})
  }

  return (
    <li key={todo.id} className='list-group-item'>
      <p style={{"text-decoration": todo.done ? "line-through": "none"}} onClick={handleToggle} >
        {index + 1}. {todo.desc}
      </p>
      <button
        className='btn btn-danger'
        onClick={handleDelete}
      >
        Borrar
      </button>
    </li>
  );
};
