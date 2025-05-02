import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query";
import { getToken } from "../utils/tokenHandler";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});

export default baseApi;