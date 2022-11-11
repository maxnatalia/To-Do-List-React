import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isOpen: false,
    },
    reducers: {
        openModal: (state, _) => {
            state.isOpen = true;
        },
        closeModal: (state, _) => {
            state.isOpen = false;
        },
    },
});

export const { openModal, closeModal} = modalSlice.actions;
export const selectIsOpen = state => state.modal.isOpen;
export default modalSlice.reducer;