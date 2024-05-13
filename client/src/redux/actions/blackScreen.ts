import { createSlice } from "@reduxjs/toolkit";

// Interface of your Data Types in Redux
interface initialStateIF {
  stScreen?: boolean;
  modalShow?: string;
}

export const blackScreen = createSlice({
  name: "blackScreen",
  // Values
  initialState: <initialStateIF>{
    stScreen: true,
    modalShow: "Profile" // Assign the component directly without JSX syntax
  },
  // Functions Part
  reducers: {
    blackScreenChanger: (state, actions) => {
      state.stScreen = !state.stScreen;
      state.modalShow = actions.payload.modalShow;
    },
  },
});

export const { blackScreenChanger } = blackScreen.actions;
export default blackScreen.reducer;