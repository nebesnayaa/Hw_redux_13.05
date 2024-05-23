import userSlice from "../slices/user/user-slice";
import todosSlice from "../slices/todos/todos-slice";
import { Tuple, configureStore } from "@reduxjs/toolkit";
import { loggerMiddleware } from "../middleware/logger";

export const store = configureStore({
  reducer: {
    user: userSlice,
    todos: todosSlice,
  },
  middleware: () => new Tuple(loggerMiddleware),
});