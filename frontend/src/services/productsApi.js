import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'ProductApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/product/' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => 'products',
    }),
    getAllCategories: builder.query({
      query: () => 'categories',
    }),
  }),
})

export const { useGetAllProductsQuery, useGetAllCategoriesQuery } = productApi