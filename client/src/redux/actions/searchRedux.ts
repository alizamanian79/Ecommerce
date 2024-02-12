
import { createSlice  } from "@reduxjs/toolkit";

//Interface of your Data Types in Redux
interface initialStateIF {
  searchStatus: boolean;
}

export const searchRedux = createSlice({
  name: "searchRedux",
  // Values
  initialState: <initialStateIF>{
    searchStatus: false,
  },
  //Functions Part
  reducers: {
    isSearch: (state, action) => {
      state.searchStatus = action.payload.searchStatus;
    },
    
  },
});

export const { isSearch } = searchRedux.actions;
export default searchRedux.reducer;
