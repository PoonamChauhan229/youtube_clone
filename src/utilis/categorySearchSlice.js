import { createSlice } from "@reduxjs/toolkit";

const categorySearchSlice=createSlice({
    name:"categorySearch",
    initialState:{
        isCategorySearched: false,
         categorysearchQuery: null,
    },
    reducers:{
        categorysearchResults:(state,action)=>{
            state.isCategorySearched=!state.isCategorySearched;
            state.categorysearchQuery=action.payload;
        }
    }
})
export const {categorysearchResults }=categorySearchSlice.actions
export default categorySearchSlice.reducer