import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import productsReducer from "./slices/productsSlice"
import pageReducer from "./slices/pageSlice"
import dateReducer from "./slices/dateSlice"
import searchedProductsReducer from "./slices/searchedProductsSlice"
import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"
import storage from "redux-persist/lib/storage"
import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import thunk from "redux-thunk"

const reducers = combineReducers({
  products: productsReducer,
  page: pageReducer,
  date: dateReducer,
  searchedProducts: searchedProductsReducer,
})

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["products", "date"],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useDispatch = () => useDispatchBase<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorBase
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>
