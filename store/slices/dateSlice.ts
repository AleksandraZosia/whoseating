import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"

interface InitialState {
  date: string
}

export const dateSlice = createSlice({
  name: "date",
  initialState: {
    date: "",
  } as InitialState,
  reducers: {
    setDate: (state, { payload }: PayloadAction<string>) => {
      state.date = payload
    },
  },
  // extraReducers: {
  //   [HYDRATE]: (state, { payload }) => {
  //     return { ...state, ...payload.date }
  //   },
  // },
})

export default dateSlice.reducer
export const { setDate } = dateSlice.actions
