import { createSlice } from "@reduxjs/toolkit";
import { getLanguageFromLocalStorage } from "./languageInLocalStorage";

const languageSlice = createSlice({
    name: "languages",
    initialState: {
        language: getLanguageFromLocalStorage(),
    },
    reducers: {
        changeLanguage: (state, { payload: chosenLanguage }) => {
            state.language = chosenLanguage;
        },
    },
});

export const { changeLanguage } = languageSlice.actions;
export const selectLanguage = state => state.languages.language;
export default languageSlice.reducer;