import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import categorySearchSlice from "./categorySearchSlice";
import channelSlice from "./channelSlice";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";
import updateSearchSlice from "./updateSearchSlice";
import videoIdSlice from "./videoIdSlice";

const store=configureStore({
//it takes reducer.
    reducer:{
        app:appSlice,
        search:searchSlice,
        chat:chatSlice,
        results:updateSearchSlice,
        categoryResults:categorySearchSlice,
        videoResults:videoIdSlice,
        channelResults:channelSlice
    }

})
export default store;
