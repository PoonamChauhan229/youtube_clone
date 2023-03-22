
import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const videoIdSlice = createSlice({
    name:"videoId",
    initialState:{
        isVideo:false,
        videoId:null,
        commentNum:null,
    },
    reducers:{
        videoIdResults:(state,action)=>{
            state.isVideo=true;
            state.videoId=action.payload
        },
        commentCount:(state,action)=>{
            state.commentNum=action.payload
        },
    }
})
export const{videoIdResults,commentCount}=videoIdSlice.actions
export default videoIdSlice.reducer

