import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const getTodos = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos"
      );
      const data = await res.json();

      dispatch(setTodos(data));
    } catch (error) {
      toast.error("Connection Error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
};

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    checkTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return { ...todo, checked: !action.payload.isChecked };
        }
        return { ...todo };
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export default todoSlice.reducer;

export const { setTodos, addTodo, checkTodo, deleteTodo } = todoSlice.actions;
