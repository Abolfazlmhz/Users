import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import rootReducer from "./rootReducer";
import { authApi } from "../api/endpoints/authApi";
import { projectApi } from "../api/endpoints/projectApi";
import { taskApi } from "../api/endpoints/taskApi";
import { commentApi } from "../api/endpoints/commentApi";

export const store = configureStore({
  reducer: {
    ...rootReducer,
    [authApi.reducerPath]: authApi.reducer,
    [projectApi.reducerPath]: projectApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      projectApi.middleware,
      taskApi.middleware,
      commentApi.middleware
    ),
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);
