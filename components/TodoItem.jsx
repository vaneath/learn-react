import React from 'react';

const TodoItem = ({ todo, index, deleteTodo}) => {
  return (
    <div>
      <span>{todo}</span>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  );
};

export default TodoItem;
