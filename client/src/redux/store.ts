
import { configureStore } from "@reduxjs/toolkit";
import testRedux from "./actions/testRedux";
import searchRedux from "./actions/searchRedux";

export default configureStore({
    reducer:{
        testRedux:testRedux,
        searchRedux:searchRedux
    }
})
