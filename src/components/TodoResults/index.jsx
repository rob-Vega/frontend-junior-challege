import { useSelector } from "react-redux";

import "./styles.css";

const TodoResults = () => {
  // Fix an ability to calculate completed tasks
  const { todos } = useSelector((state) => state.todos);
  const todosDone = todos.filter((todo) => todo.checked).length;

  return <div className="todo-results">Done: {todosDone}</div>;
};

export default TodoResults;
