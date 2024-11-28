import { createSlice } from "@reduxjs/toolkit";

export const scrollSlice = createSlice({
  name: "scroll",
  initialState: {
    contactFormVisible: false,
    targetSection: null,
  },
  reducers: {
    setTargetSection: (state, action) => {
      state.targetSection = action.payload;
    },
    clearTargetSection: (state) => {
      state.targetSection = null;
    },
    toggleContactForm: (state,action) => {
      state.contactFormVisible = action.payload;
    },
  },
});

export const { setTargetSection, clearTargetSection, toggleContactForm } =
  scrollSlice.actions;

export default scrollSlice.reducer;
