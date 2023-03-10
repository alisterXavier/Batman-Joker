import { configureStore, createSlice } from "@reduxjs/toolkit";

export const transitionSlice = createSlice({
  name: "Transition",
  initialState: {
    jokerTransition: false,
    harleyTransition: false,
    catTransition: false,
  },
  reducers: {
    Bat_JokerTransition: (state, action) => {
      const value = action.payload;
      state.jokerTransition = value;
    },
    HarleyTransition: (state, action) => {
      const value = action.payload;
      state.harleyTransition = value;
    },
    CatTransition: (state, action) => {
      const value = action.payload;
      state.catTransition = value;
    },
  },
});

export const store = configureStore({
  reducer: {
    transition: transitionSlice.reducer,
  },
});

export default store;
export const { Bat_JokerTransition, CatTransition, HarleyTransition } =
  transitionSlice.actions;
