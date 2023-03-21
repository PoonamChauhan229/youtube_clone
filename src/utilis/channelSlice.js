import { createSlice } from "@reduxjs/toolkit";

const channelSlice=createSlice({
    name:"channelSlice",
    initialState:{
        isChannel: false,
         channelSubscriber: null,
         channelThumbnails:null
    },
    reducers:{
        channelSubscriber:(state,action)=>{
            state.isChannel=true;
            state.channelSubscriber=action.payload;
        },
        channelThumbnails:(state,action)=>{           
            state.channelThumbnails=action.payload;
        }
    }
})
export const {channelSubscriber,channelThumbnails}=channelSlice.actions
export default channelSlice.reducer