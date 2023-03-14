import { createSlice } from "@reduxjs/toolkit";

const updatesearchSlice=createSlice({
    name:"updatesearch",
    initialState:{
        isSearched: false,
         searchQuery: null,
    },
    reducers:{
        searchResults:(state,action)=>{
            state.isSearched=true;
            state.searchQuery=action.payload;
        }
    }
})
export const {searchResults }=updatesearchSlice.actions
export default updatesearchSlice.reducer