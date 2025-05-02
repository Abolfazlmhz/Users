import baseApi from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: `/users`,
        method: "GET",
        // برای json-server، استفاده از params به شما امکان فیلتر کردن لیست کاربران بر اساس username و password را می‌دهد.
        params: {
          username: credentials.username,
          password: credentials.password,
        },
      }),
      transformResponse: (response) => {
        if (response && response.length > 0) {
          return response[0];
        }
        throw new Error("کاربر یافت نشد");
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
