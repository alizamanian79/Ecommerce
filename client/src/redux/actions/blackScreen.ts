import { createSlice } from "@reduxjs/toolkit";

//Interface of your Data Types in Redux
interface initialStateIF {
  stScreen?: boolean;
}

export const blackScreen = createSlice({
  name: "blackScreen",
  // Values
  initialState: <initialStateIF>{
    stScreen: true,
  },
  //Functions Part
  reducers: {
    blackScreenChanger: (state, actions) => {
      state.stScreen = !state.stScreen;
    },
  },
});

export const { blackScreenChanger } = blackScreen.actions;
export default blackScreen.reducer;