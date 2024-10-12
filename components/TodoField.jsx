import React, { useState } from "react";

const InputField = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <div>
      <input
        type='text'
        value={input}
        onChange={handleChange}
        placeholder='Add a new todo...'
        aria-label='New Todo'
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default InputField;
