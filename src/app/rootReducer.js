import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import usersReducer from "../features/users/usersSlice";
import projectReducer from "../features/projects/projectSlice";
import taskReducer from "../features/tasks/taskSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  projects: projectReducer,
  tasks: taskReducer,
  // comments: commentReducer,
});

export default rootReducer;
