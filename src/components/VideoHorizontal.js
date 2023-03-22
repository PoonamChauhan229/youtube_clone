import React from 'react'

import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useEffect, useState } from "react";
import { API_Key, VIDEO_DETAILS_API } from '../utilis/constants';
import { useNavigate, useSearchParams } from "react-router-dom";
import { videoIdResults } from '../utilis/videoIdSlice';
import { useDispatch } from 'react-redux';

const VideoHorizontal = ({id,snippet}) => {
   const [views, setViews] = useState(null)
   const [duration, setDuration] = useState(null)
   const {title,publishedAt,channelId,description,thumbnails,channelTitle}=snippet
   const{videoId}=id
   const [vId,setVId]=useState(videoId)
   //console.log(id)
useEffect(() => {
  getVideowithID()
  }, [videoId])
  const dispatch = useDispatch();
const navigate=useNavigate()
let [searchParams] = useSearchParams();
function handleClick() {
   navigate(`/watch?v=${vId}`);  
   dispatch(videoIdResults(searchParams.get("v")))  
 }
//  console.log(vId)
//  console.log(VIDEO_DETAILS_API + vId + "&key=" + API_Key)
async function getVideowithID() {
   if (videoId) {
     const data = await fetch(VIDEO_DETAILS_API + vId + "&key=" + API_Key);
     const json = await data.json();
   //   console.log(json?.items[0]);
     setDuration(json?.items[0].contentDetails.duration)
         setViews(json?.items[0].statistics.viewCount)
      }
 }
    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(seconds * 1000).format('mm:ss')    
 
   

   return (
      
         <div className=' flex border-b-[0.3px] border-solid border-gray-600 m-1 py-2 align-center'
         onClick={handleClick}>
         <div className='left w-[25%] h-[68px]'>
            <LazyLoadImage
               src={thumbnails?.medium?.url}
               effect='blur'
               className='w-[130px] h-[65px]'
            />
            <span className='duration'>{_duration}</span>
         </div>
         <div className='text-sm right p-0 ml-2 w-[75%]'>
            <p className='font-bold mb-1'>
               {title}
            </p>
            <div>
            <i className="bi bi-eye-fill"></i> {numeral(views).format('0.a')} Views •
               {moment(publishedAt).fromNow()}
            </div>
            <p>{channelTitle}</p>
            </div>
         </div>
    
   )
    
}

export default VideoHorizontal