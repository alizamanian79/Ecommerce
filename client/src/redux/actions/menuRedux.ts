import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interface of your Data Types in Redux
interface initialStateIF {
  menu: boolean;
  chosen?: string | undefined;
}

const initialState: initialStateIF = {
  menu: false,
  chosen: "خانه",
};

export const menuRedux = createSlice({
  name: "menuRedux",
  initialState,
  reducers: {
    handleChangeMenuStatus: (state) => {
      state.menu = !state.menu;
    },
    handleChosen: (state, action: PayloadAction<{ chosen: string }>):void => {
      state.menu = !state.menu;
      state.chosen = action.payload.chosen;
    },
  },
});

export const { handleChangeMenuStatus, handleChosen } = menuRedux.actions;
export default menuRedux.reducer;
