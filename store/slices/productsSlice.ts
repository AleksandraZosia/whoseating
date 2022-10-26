import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store"
interface Nutrients {
  f: number
  c: number
  p: number
}

interface Product {
  name: string
  date: string
  meal: string
  id: string
  amount: number
  nutrients: Nutrients
}

interface ProductsState {
  products: Product[]
}

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  } as ProductsState,
  reducers: {
    addProduct: (state, { payload }: PayloadAction<Product>) => {
      state.products.push(payload)
    },
    deleteProduct: (state, { payload }: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== payload
      )
    },
    updateName: (
      state,
      { payload }: PayloadAction<{ date: string; name: string }>
    ) => {
      state.products.map((product) => {
        if (product.date === payload.date) {
          product.name = payload.name
        }
      })
    },

    updateAmount: (
      state,
      { payload }: PayloadAction<{ date: string; amount: number }>
    ) => {
      state.products.map((product) => {
        if (product.date === payload.date) {
          product.amount = payload.amount
        }
      })
    },
    setProducts: (state, { payload }: PayloadAction<Product[]>) => {
      state.products = payload
    },
  },
})
export const getProductsState = (state: RootState) => state.products
export const {
  addProduct,
  updateName,
  updateAmount,
  deleteProduct,
  setProducts,
} = productsSlice.actions
export default productsSlice.reducer
