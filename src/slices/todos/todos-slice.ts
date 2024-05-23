import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TodoType } from "../../types/todo-type";

const initialState: {todos: TodoType[]} = {
  todos: [],
};

export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async (_, {rejectWithValue}) => {
    try{
      const res = await axios.get(
        import.meta.env.VITE_PATH_TO_SERVER + "/todos"
      );
      return res.data as TodoType[];
    }  catch(error: any){
      return rejectWithValue(error.message);
    }
  }
);

export const postTodos = createAsyncThunk(
  "todos/postTodos",
  async (newTodo: TodoType, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        import.meta.env.VITE_PATH_TO_SERVER + "/todos",
        newTodo
      );
      return res.data as TodoType[]; // Ensure type safety
    } catch (error: any) {
      return rejectWithValue(error.message); // Handle errors
    }
  }
);

export  const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) =>{
      state.todos.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => 
        todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodoStatus, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;