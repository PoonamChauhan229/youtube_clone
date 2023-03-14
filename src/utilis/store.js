import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";
import updateSearchSlice from "./updateSearchSlice";

const store=configureStore({
//it takes reducer.
    reducer:{
        app:appSlice,
        search:searchSlice,
        chat:chatSlice,
        results:updateSearchSlice,
    }

})
export default store;
