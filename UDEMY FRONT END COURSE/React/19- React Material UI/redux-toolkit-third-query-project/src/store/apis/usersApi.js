import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints(builder) {
    return {
      fetchUsers: builder.query({
        query: () => {
          return {
            url: "/users",
            method: "GET",
          };
        },
      }),
      addUser: builder.mutation({
        query: () => {
          return {
            url: "/users",
            method: "POST",
            body: {
              name: "Can",
            },
          };
        },
      }),
      removeUser: builder.mutation({
        query: (user) => {
          return {
            url: `/users/${user.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const { useFetchUsersQuery, useAddUserMutation, useRemoveUserMutation } =
  usersApi;

export { usersApi };
