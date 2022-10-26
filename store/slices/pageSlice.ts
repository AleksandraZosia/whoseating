import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

interface PageState {
  page: string
}

const initialState = {
  page: "/",
} as PageState

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setActivePage: (state, { payload }: PayloadAction<string>) => {
      state.page = payload
    },
  },
})
export const getActivePage = (state: RootState) => state.page
export const { setActivePage } = pageSlice.actions

export default pageSlice.reducer
