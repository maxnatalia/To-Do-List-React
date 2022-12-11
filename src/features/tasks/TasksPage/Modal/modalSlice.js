import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isOpen: false,
        isOpenAll: false,
    },
    reducers: {
        openModalAll: (state, _) => {
            state.isOpenAll = true;
            state.isOpen = false;
        },
        openModal: (state, _) => {
            state.isOpen = true;
            state.isOpenAll = false;
        },
        closeModal: (state, _) => {
            state.isOpen = false;
            state.isOpenAll = false;
        },
    },
});

export const { openModal, closeModal, openModalAll} = modalSlice.actions;
export const selectIsOpen = state => state.modal.isOpen;
export const selectIsOpenAll = state => state.modal.isOpenAll;
export default modalSlice.reducer;