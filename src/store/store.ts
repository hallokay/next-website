import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;