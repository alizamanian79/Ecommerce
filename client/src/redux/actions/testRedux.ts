import { createSlice } from "@reduxjs/toolkit";

//Interface of your Data Types in Redux
interface initialStateIF {
  number?: number;
}

export const testRedux = createSlice({
  name: "testRedux",
  // Values
  initialState: <initialStateIF>{
    number: 0,
  },
  //Functions Part
  reducers: {
    increase: (state, action?) => {
      if (state.number){
        state.number = state.number + 1;
      }
      
    },
    decrease: (state, action?) => {
      if (state.number){
        state.number = state.number - 1;
      }
      
    },
  },
});

export const { increase, decrease } = testRedux.actions;
export default testRedux.reducer;
