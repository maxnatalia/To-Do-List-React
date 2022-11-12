import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "languages",
    initialState: {
        language: "PL"
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