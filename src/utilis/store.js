import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const store=configureStore({
//it takes reducer.
    reducer:{
        app:appSlice
    }

})
export default store;
