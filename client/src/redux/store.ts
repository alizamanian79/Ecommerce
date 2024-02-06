
import { configureStore } from "@reduxjs/toolkit";
import testRedux from "./actions/testRedux";
export default configureStore({
    reducer:{
        testRedux:testRedux,
    }
})
