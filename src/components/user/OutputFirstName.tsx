import { useSelector } from "react-redux";

const OutputFirstName = () => {
  const first_name = useSelector((state: any) => {
    return state.user.firstName;
  });
  return (
    <div className="input-field col ">
      <div className="card-panel">
        <span className="#4db6ac teal lighten-2">{first_name}</span>
      </div>
    </div>
  );
}
export default OutputFirstName;