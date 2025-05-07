import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  loading: false, 
  error: null, 
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.list = action.payload;
    },
    addTask: (state, action) => {
      state.list.push(action.payload);
    },
    updateTask: (state, action) => {
      const index = state.list.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    removeTask: (state, action) => {
      state.list = state.list.filter((task) => task.id !== action.payload);
    },
    tasksLoading: (state) => {
      state.loading = true;
    },
    tasksLoaded: (state) => {
      state.loading = false;
    },
    tasksError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setTasks,
  addTask,
  updateTask,
  removeTask,
  tasksLoading,
  tasksLoaded,
  tasksError,
} = taskSlice.actions;

export default taskSlice.reducer;
