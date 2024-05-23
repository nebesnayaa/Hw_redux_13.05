import { clearFields } from "../../slices/user/user-slice";
import { useDispatch } from "react-redux";

const ClearButton = () => {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearFields());
  };

  return(
    <div className="btn btn-primary btn-clear"
         onClick={ handleClear }>
      Clear all
    </div>
  );
};

export default ClearButton;