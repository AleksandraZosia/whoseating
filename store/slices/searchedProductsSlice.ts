import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Nutrients, Product, ProductsState } from "./productsSlice"

interface SearchedProduct {
  name: string
  id: string
  nutrients: Nutrients
}

interface SearchedProducts {
  searchedProducts: SearchedProduct[]
}

const searchedProductsSlice = createSlice({
  name: "searchedProducts",
  initialState: {
    searchedProducts: [],
  } as SearchedProducts,
  reducers: {
    addSearchedProduct: (
      state,
      { payload }: PayloadAction<SearchedProduct>
    ) => {
      state.searchedProducts.push(payload)
    },
  },
})

export const { addSearchedProduct } = searchedProductsSlice.actions

export default searchedProductsSlice.reducer
