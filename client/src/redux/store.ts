
import { configureStore } from "@reduxjs/toolkit";
import testRedux from "./actions/testRedux";
import searchRedux from "./actions/searchRedux";
import menuRedux from "./actions/menuRedux";
export default configureStore({
    reducer:{
        testRedux:testRedux,
        searchRedux:searchRedux,
        menuRedux:menuRedux
    }
})
