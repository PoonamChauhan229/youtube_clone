
import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const videoIdSlice = createSlice({
    name:"videoId",
    initialState:{
        isVideo:false,
        videoId:null,
        commentNum:null,
        duration:null,
        loading:null,
    },
    reducers:{
        videoIdResults:(state,action)=>{
            state.videoId=action.payload
        },
        videoIdStatus:(state,action)=>{
           state.isVideo=action.payload
        },
        commentCount:(state,action)=>{
            state.commentNum=action.payload
        },
        durationResults:(state,action)=>{
            state.duration=action.payload
        },
        loadingStatus:(state,action)=>{            
            state.loading=action.payload
        },
    }
})
export const{videoIdStatus,videoIdResults,commentCount,durationResults,loadingStatus}=videoIdSlice.actions
export default videoIdSlice.reducer

