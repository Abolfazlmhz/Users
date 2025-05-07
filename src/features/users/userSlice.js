import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  loading: false,
  error: null,
};
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.list = action.payload;
    },
    addUser: (state, action) => {
      state.list.push(action.payload);
    },
    removeUser: (state, action) => {
      state.list = state.list.filter((user) => user.id !== action.payload);
    },
    usersLoading: (state) => {
      state.loading = true;
    },
    usersLoaded: (state) => {
      state.loading = false;
    },
    usersError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const {
  setUsers,
  addUser,
  removeUser,
  usersLoading,
  usersLoaded,
  usersError,
} = usersSlice.actions;
export default usersSlice.reducer;