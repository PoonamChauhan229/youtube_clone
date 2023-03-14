import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { YOUTUBE_VIDEOS_API } from '../utilis/constants';
import VideoCard from './VideoCard';
 

const VideoContainer = () => {
  const[video,setVideo]=useState([])
  useEffect(() => {
    getVideos();
  }, [])

  async function getVideos(){
    let data=await fetch(YOUTUBE_VIDEOS_API)
    let json=await data.json();
    //console.log(json.items)
    setVideo(json.items)
  }
  return (
    <div className=' w-full flex flex-wrap'>
      {
        video.map((element)=> <Link to={'/watch?v='+element.id}><VideoCard info={element} key={video.id}/></Link> )
      }
    
    </div>
  )
}

export default VideoContainer