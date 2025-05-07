import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  loading: false,
  error: null,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.list = action.payload;
    },
    addProject: (state, action) => {
      state.list.push(action.payload);
    },
    updateProject: (state, action) => {
      const index = state.list.findIndex(
        (project) => project.id === action.payload.id
      );
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    removeProject: (state, action) => {
      state.list = state.list.filter(
        (project) => project.id !== action.payload
      );
    },
    projectsLoading: (state) => {
      state.loading = true;
    },
    projectsLoaded: (state) => {
      state.loading = false;
    },
    projectsError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setProjects,
  addProject,
  updateProject,
  removeProject,
  projectsLoading,
  projectsLoaded,
  projectsError,
} = projectSlice.actions;

export default projectSlice.reducer;
