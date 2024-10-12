import { useState, useEffect } from "react";
import InputField from "../components/TodoField";
import TodoItem from "../components/TodoItem";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("todos", todos);
  }, [todos]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const deleteTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1>Todo List</h1>
      <InputField addTodo={addTodo} />
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  );
}

export default App;
