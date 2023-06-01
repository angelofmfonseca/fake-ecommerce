import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { baseUrl } from '../../constants';

const initialState: ProductsState = {
  value: [],
};

export const fetchByProducts = createAsyncThunk(
  '/products/fetchByProductsStatus',
  async () => {
    const res = await fetch(`${baseUrl}/products`)
      .then((res) => res.json())
      .then((json) => json);
    return res;
  }
);

export const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(fetchByProducts.fulfilled, (state, action) => {
      state.value.push(action.payload);
    }),
});

export const {} = ProductsSlice.actions;

export default ProductsSlice.reducer;
