import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  login: [{ id: 1, email: "Hello", password: "1234" }],
};

export const loginReducer = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const data = {
        id: nanoid(),
        email: action.payload.email,
        password: action.payload.password,
      };
      state.login.push(data);
    },
  },
});

export const { loginUser } = loginReducer.actions;

export default loginReducer.reducer;
