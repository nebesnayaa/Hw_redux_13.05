import { setFirstName } from "../../slices/user/user-slice";
import { useDispatch, useSelector } from "react-redux";

const InputFirstName = () => {
  const dispatch = useDispatch();

  const firstName = useSelector((state: any) => 
      state.user.firstName
  );
  
  return (
    <div className="input-field col s6">
      <input
        id="first_name"
        type="text"
        className="validate"
        value={ firstName }
        onChange={ (e) => 
          {
            dispatch(setFirstName(e.target.value));
          } }
        />
        <label className={ firstName ? "active" : "" } 
               htmlFor="first_name">
          First Name
        </label>
    </div>
  );
}

export default InputFirstName;