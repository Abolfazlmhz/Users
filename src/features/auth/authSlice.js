import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSucces: (state, action) => {
      (state.user = action.payload.user), (state.token = action.payload.token);
      state.status = "succeeded";
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.status = "idle";
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { loginSuccess, logout, setError, clearError } = authSlice.actions;
export default authSlice.reducer;
