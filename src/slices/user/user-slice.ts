import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
};

export  const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    clearFields: (state) => {
      state.firstName = "";
      state.lastName = "";
    }
  },
});

export const { setFirstName, setLastName, clearFields } = userSlice.actions;
export default userSlice.reducer;