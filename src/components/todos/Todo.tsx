//import { TodoType } from "../../types/todo-type";
import { useDispatch } from "react-redux";
import { toggleTodoStatus, removeTodo } from "../../slices/todos/todos-slice";
import { TodoType } from "../../types/todo-type";

const Todo = ({ props } : { props: TodoType }) => {
  const dispatch = useDispatch();

  const toggleStatusHandler = () => {
    dispatch(toggleTodoStatus(props.id));
  };

  const deleteHandler = () => {
    dispatch(removeTodo(props.id));
  };

  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>
        {props.isCompleted ? (
          <i className="material-icons left green-text" onClick={toggleStatusHandler}>done</i>
        ) : (
          <i className="material-icons left red-text" onClick={toggleStatusHandler}>clear</i>
        )}
      </td>
      <td>
        <button className="btn red" onClick={deleteHandler}>Delete</button>
      </td>
    </tr>
  );
};
// const Todo = ({ props } : any ) => {
//   return (
//     <tr>
//       <td>{props.id}</td>
//       <td>{props.title}</td>
//       <td>
//         {props.isCompleted ? (
//           <i className="material-icons left green-text">done</i>
//           ) : (
//           <i className="material-icons left red-text">clear</i>
//           )
//         }
//       </td>
//     </tr>
//   );
// };

export default Todo;