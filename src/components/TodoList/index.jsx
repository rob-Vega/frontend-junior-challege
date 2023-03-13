import { checkTodo, deleteTodo, getTodos } from "app/feature/todo/todoSlice";
import React, { useEffect } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import TodoListItem from "components/TodoListItem";

const TodoList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const { todos } = useSelector((state) => state.todos);

  const handleDelete = (todoId) => {
    console.log("delete");
    dispatch(deleteTodo(todoId));
  };

  const toggleCheck = (todoId, isChecked) => {
    // Fix an ability to toggle task
    dispatch(checkTodo({ todoId, isChecked }));
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length > 0 ? (
        <div className="todo-list-content">
          {/* Fix an ability to render todos */}
          {todos.map((todo) => (
            <TodoListItem
              key={todo.id}
              {...todo}
              onDelete={handleDelete}
              onCheck={toggleCheck}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      )}
    </div>
  );
};

export default TodoList;
