import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "./themeInLocalStorage";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        darkTheme: getThemeFromLocalStorage(),
    },
    reducers: {
        toggleTheme: (state) => {
            state.darkTheme = !state.darkTheme;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export const selectDarkTheme = state => state.theme.darkTheme;
export default themeSlice.reducer;