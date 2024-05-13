
import { configureStore } from "@reduxjs/toolkit";
import testRedux from "./actions/testRedux";
import menuRedux from "./actions/menuRedux";
import blackScreen from "./actions/blackScreen";
export default configureStore({
    reducer:{
        testRedux:testRedux,
        menuRedux:menuRedux,
        blackScreen:blackScreen

    }
})
