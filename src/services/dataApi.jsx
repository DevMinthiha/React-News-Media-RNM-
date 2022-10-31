import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const API = "http://13.214.58.126:3001";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({ API }),
  endpoints: (builder) => ({
    getCats: builder.query({
      query: () => `${API}/cats`,
    }),
  }),
});

export const { useGetCatsQuery } = dataApi;
