import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export type Theme = "dark" | "light";
 type Theme = "dark" | "light";

const themeSlice = createSlice({
  name: "theme",
  initialState: "dark" as Theme,
  reducers: {
    toggleTheme: (state: Theme) => {
      return state === "dark" ? "light" : "dark";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;