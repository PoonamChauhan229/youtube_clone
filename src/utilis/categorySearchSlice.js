import { createSlice } from "@reduxjs/toolkit";

const categorySearchSlice=createSlice({
    name:"categorySearch",
    initialState:{
        isCategorySearched: false,
         categorysearchQuery: null,
    },
    reducers:{
        categorysearchResults:(state,action)=>{
            state.isCategorySearched=true;
            state.categorysearchQuery=action.payload;
        }
    }
})
export const {categorysearchResults }=categorySearchSlice.actions
export default categorySearchSlice.reducer