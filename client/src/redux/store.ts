
import { configureStore } from "@reduxjs/toolkit";
import testRedux from "./actions/testRedux";
import menuRedux from "./actions/menuRedux";
export default configureStore({
    reducer:{
        testRedux:testRedux,
        menuRedux:menuRedux
    }
})
