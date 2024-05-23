import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../../slices/todos/todos-slice";
import { v4 } from 'uuid';
import { TodoType } from "..//../types/todo-type";
import TodoList from "./TodoList";
const InputTodo = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const addTodoHandler = () => {
    const newTodo: TodoType = {
      id: v4(),
      title,
      isCompleted: false,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
  };

  return (
    <div className="input-field todo-input col s6">
      <input
        id="title"
        type="text"
        className="validate"
        onChange={(e: any) => setTitle(e.target.value)}
        value={title}
      />
      <label className={title ? "active" : ""} htmlFor="title">Todo Title</label>
      <a
        className="waves-effect waves-light btn-large"
        onClick={title.length > 0 ? addTodoHandler : () => {}}
      >
        <i className="material-icons left">chevron_right</i>Add
      </a>
      <TodoList/>
    </div>
  );
};
// const InputTodo = () => {
//   const dispatch = useDispatch();
//   const [todo, setTodo] = useState<TodoType>({
//     id: "",
//     title: "",
//     isCompleted: true,
//   });

//   const addTodoHandler = () => {
//     try{
//       setTodo((prevState) => ({
//         ...prevState,
//         id: v4(),
//         isCompleted: true,
//         title: todo.title,
//       }));
//       dispatch(addTodo(todo));
//       setTodo((prevState) => ({
//         ...prevState,
//         title: "",
//       }));
//     } catch(error) {}
//   };
//   return (
//     <div className="input-field col s6">
//       <input
//         id="title"
//         type="text"
//         className="validate"
//         onChange={(e: any) => {
//           setTodo((prevState) => ({
//             ...prevState,
//             title: e.target.value,
//           }));
//         }}
//         value={todo.title}
//       />
//       <label htmlFor="title">TodoTitle</label>
//       <a
//         className="waves-effect waves-light btn-large"
//         onClick={todo.title.length > 0 ? addTodoHandler : () => {}}
//       >
//         <i className="material-icons left">chevron_right</i>Add
//       </a>
//       <TodoList/>
//     </div>
//   );
// };

export default InputTodo;