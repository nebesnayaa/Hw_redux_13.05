import InputFirstName from "./InputFirstName";
import InputLastName from "./InputLastName";
import OutputFirstName from "./OutputFirstName";
import OutputLastName from "./OutputLastName";
import ClearButton from "./ClearButton";

const User = () => {
  return (
    <>
      <div className="row">
        <InputFirstName/>
        <InputLastName/>
      </div>
      <div className="row">
        <OutputFirstName/>
        <OutputLastName/>
      </div>
      <div className="row">
        <ClearButton />
      </div>
    </>
  );
};

export default User;