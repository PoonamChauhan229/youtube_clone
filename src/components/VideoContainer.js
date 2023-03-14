import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { YOUTUBE_SEARCH_SHOWVIDEO_API, YOUTUBE_VIDEOS_API } from '../utilis/constants';
import VideoCard from './VideoCard';
 

const VideoContainer = () => {
  const { searchQuery, isSearched } = useSelector((store) => store.results);
  const [isCalled, setIsCalled] = useState(false);
  const [resultVideos, setResultVideos] = useState([]);

  const[video,setVideo]=useState([])

  useEffect(() => {
     isSearched ? getSuggestedVideoList() : getVideos();
  }, [isSearched, searchQuery]);

  async function getVideos(){
    let data=await fetch(YOUTUBE_VIDEOS_API)
    let json=await data.json();
   //console.log(json.items)
    setVideo(json.items)
  }

  async function getSuggestedVideoList(){
    if(searchQuery!==""){
    const data = await fetch(YOUTUBE_SEARCH_SHOWVIDEO_API + searchQuery);
    const json = await data.json();
    //console.log(json);
    setResultVideos(json.items);
    //console.log(json.items);
    setIsCalled(true);
    }
  }
console.log(resultVideos)
  if (isCalled) {
  return (
    <div className=' w-full flex flex-wrap'>
      {
        resultVideos.map((element)=> {
         console.log(element)  
       return <Link to={'/watch?v='+element.id.videoId} key={element.id.videoId}>
          <VideoCard info={element} />
          </Link>
       
        } )
      }
    </div>
  )
  }
  return (
    <div className=' w-full flex flex-wrap'>
      {
        video.map((element)=> {
          // console.log(element.id)  
       return <Link to={'/watch?v='+element.id} key={element.id}>
          <VideoCard info={element} />
          </Link>
       
        } )
      }
    </div>
  )
}

export default VideoContainer