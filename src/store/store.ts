import { configureStore, createSlice } from "@reduxjs/toolkit";

export const transitionSlice = createSlice({
  name: "Transition",
  initialState: {
    transition: false,
  },
  reducers: {
    ActivateTransition: (state, action) => {
      const value = action.payload;
      state.transition = value;
    },
  },
});

export const store = configureStore({
  reducer: {
    transition: transitionSlice.reducer,
  },
});

export default store;
export const { ActivateTransition } = transitionSlice.actions;
