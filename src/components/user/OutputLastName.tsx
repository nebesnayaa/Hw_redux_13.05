import { useSelector } from "react-redux";

const OutputLastName = () => {
  const last_name = useSelector((state: any) => {
    return state.user.lastName;
  });
  return (
    <div className="input-field col s6">
      <div className="card-panel">
        <span className="#00bfa5 teal accent-4">{ last_name }</span>
      </div>
    </div>
  );
}
export default OutputLastName;