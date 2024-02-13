
import { createSlice  } from "@reduxjs/toolkit";

//Interface of your Data Types in Redux
interface initialStateIF {
  isOpen: boolean;
}

export const menuRedux = createSlice({
  name: "menuRedux",
  // Values
  initialState: <initialStateIF>{
    isOpen: false,
  },
  //Functions Part
  reducers: {
    menuStatus: (state, action?) => {
      state.isOpen = !state.isOpen;
    },
    
  },
});

export const { menuStatus } = menuRedux.actions;
export default menuRedux.reducer;
