import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  YOUTUBE_SEARCH_SHOWVIDEO_API,
  YOUTUBE_VIDEOS_API,
} from "../utilis/constants";
import VideoCard from "./VideoCard";

import InfiniteScroll from "react-infinite-scroll-component";

const VideoContainer = () => {
  const { searchQuery, isSearched } = useSelector((store) => store.results);
  const [isCalled, setIsCalled] = useState(false);
  const [isCategoryCalled, setisCategoryCalled] = useState(false);
  const [resultVideos, setResultVideos] = useState([]);
  const [isVideo,setIsVideo]=useState(false)
  const [video, setVideo] = useState([]);
  const [scrollVideo,setScrollVideo]=useState(video)
  const { isCategorySearched, categorysearchQuery } = useSelector(
    (store) => store.categoryResults
  );

  useEffect(() => {
    isSearched
      ? getSuggestedVideoList()
      : isCategorySearched
      ? getCategoryVideoList()
      : getVideos();
  }, [isSearched, searchQuery, isCategorySearched]);


  useEffect(()=>{
    fetchmoreData()
  },[setIsVideo])
  console.log(isCategorySearched, categorysearchQuery);
  async function getVideos() {
    let data = await fetch(YOUTUBE_VIDEOS_API);
    let json = await data.json();
    console.log(json.items);
    setVideo(json.items);
    setScrollVideo(json.items);
    setIsVideo(true)
    
  }

  async function getSuggestedVideoList() {
    if (searchQuery !== "") {
      const data = await fetch(YOUTUBE_SEARCH_SHOWVIDEO_API + searchQuery);
      const json = await data.json();
      console.log(json);
      setResultVideos(json.items);
      //console.log(json.items);
      setIsCalled(true);
    }
  }

  async function getCategoryVideoList() {
    if (categorysearchQuery !== "") {
      const data = await fetch(
        YOUTUBE_SEARCH_SHOWVIDEO_API + categorysearchQuery
      );
      const json = await data.json();
      console.log(json);
      setResultVideos(json.items);
      //console.log(json.items);
      setisCategoryCalled(true);
    }
  }

 async function fetchmoreData(){
  let data = await fetch(YOUTUBE_VIDEOS_API);
    let json = await data.json();
    console.log(json.items);
   setScrollVideo([...video,...json.items]);
    console.log(scrollVideo)
 }

  console.log(resultVideos);
  if (isCalled || isCategoryCalled) {
    return (
      
        <InfiniteScroll
          dataLength={resultVideos.length} //This is important field to render the next data
          //next={fetchData}
          hasMore={true}
          loader={<h4>Loading...</h4>}         
        >
          <div  className=" w-full flex flex-wrap  h-[550px]">
          {resultVideos.map((element) => {
            console.log(element);
            return (
              <Link
                to={"/watch?v=" + element.id.videoId}
                key={element.id.videoId}
              >
                <VideoCard info={element} />
              </Link>
            );
          })}
          </div>
        </InfiniteScroll>
      
    );
  } else {
    return (
     
        <InfiniteScroll
          dataLength={resultVideos.length} //This is important field to render the next data
          hasMore={true}
          next={fetchmoreData}          
          loader={<h4>Loading...</h4>}
        >
           <div  className=" w-full flex flex-wrap  h-[550px]">
          {video.map((element) => {
            // console.log(element.id)
            return (
              <Link to={"/watch?v=" + element.id} key={element.id}>
                <VideoCard info={element} />
              </Link>
            );
          })}
            </div>
        </InfiniteScroll>
    
    );
  }
};

export default VideoContainer;
