import { setLastName } from "../../slices/user/user-slice";
import { useDispatch, useSelector } from "react-redux";

const InputLastName = () => {
  const dispatch = useDispatch();

  const lastName = useSelector((state: any) => 
    state.user.lastName
  );

  return (
    <div className="input-field col s6">
      <input
        id="last_name"
        type="text"
        className="validate"
        value={ lastName }
        onChange={ (e) => 
          {
            dispatch(setLastName(e.target.value));
          } }
        />
        <label className={ lastName ? "active" : "" } 
               htmlFor="first_name">
          Last Name
        </label>
    </div>
  );
}

export default InputLastName;