import { addTodo } from "app/feature/todo/todoSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

import "./style.css";

const TodoForm = () => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    id: new Date().getTime(),
    label: "",
    checked: false,
  });

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.label.length < 1) return;

    dispatch(addTodo(todo));

    setTodo({
      ...todo,
      id: new Date().getTime(),
      label: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        className="todo-form-input"
        type="text"
        name="label"
        value={todo.label}
        onChange={handleChange}
        placeholder="Enter new to do"
      />
      <button className="todo-form-button">ADD TO DO</button>
    </form>
  );
};

export default TodoForm;
