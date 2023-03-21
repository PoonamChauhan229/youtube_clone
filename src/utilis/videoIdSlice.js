
import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const videoIdSlice = createSlice({
    name:"videoId",
    initialState:{
        isVideo:false,
        videoId:null
    },
    reducers:{
        videoIdResults:(state,action)=>{
            state.isVideo=true;
            state.videoId=action.payload
        }
    }
})
export const{videoIdResults}=videoIdSlice.actions
export default videoIdSlice.reducer

