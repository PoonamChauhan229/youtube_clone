import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  YOUTUBE_SEARCH_SHOWVIDEO_API,
  YOUTUBE_VIDEOS_API,
} from "../utilis/constants";
import VideoCard from "./VideoCard";

import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";

const VideoContainer = () => {
  const dispatch=useDispatch()
  const { searchQuery, isSearched } = useSelector((store) => store.results);
  const [isCalled, setIsCalled] = useState(false);
  const [isCategoryCalled, setisCategoryCalled] = useState(false);
  const [resultVideos, setResultVideos] = useState([]);
  const [video, setVideo] = useState([]);
  const [hasMore, sethasMore] = useState(true);
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

 // console.log(isCategorySearched, categorysearchQuery);
 //console.log(YOUTUBE_VIDEOS_API) 
 async function getVideos() {
    let data = await fetch(YOUTUBE_VIDEOS_API);
    let json = await data.json();
   // console.log(json.items);
    setVideo(json.items);

  }
  //console.log(video) 
  async function getSuggestedVideoList() {
    if (searchQuery !== "") {
      const data = await fetch(YOUTUBE_SEARCH_SHOWVIDEO_API + searchQuery);
      const json = await data.json();
     // console.log(json);
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

  // infinite scrolling
 async function fetchVideos(){
  let data = await fetch(YOUTUBE_VIDEOS_API);
   let json = await data.json();
  // console.log(json.items)
    return json.items
  }
async function fetchmoreData(){
  const videoinfinite=await fetchVideos();
  setVideo([...video,...videoinfinite])
}

  // infinite scrolling
async function getResultVideoList() {
  if (searchQuery !== "") {
    const data = await fetch(YOUTUBE_SEARCH_SHOWVIDEO_API + searchQuery);
    const json = await data.json();
    return json.items
  }
}
async function fetchresultData(){
  const resultinfinite=await getResultVideoList();
  setResultVideos([...resultVideos,...resultinfinite])
  }

 // console.log(resultVideos);
  if (isCalled || isCategoryCalled) {
    return (
      
        <InfiniteScroll
          dataLength={resultVideos.length} //This is important field to render the next data
          hasMore={true}
          //next={setTimeout(fetchresultData,500)}          
          loader={<Loader/>}       
        >
          <div  className=" w-full flex flex-wrap  h-[550px]">
          {resultVideos.map((element) => {
            console.log(element);
            return (
              <Link
                to={"/watch?v=" + element.id.videoId}
                //key={element.id.videoId}
              >
                <VideoCard info={element}/>
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
        //  next={setTimeout(fetchmoreData,500)}          
          loader={<Loader/>}
        >
           {
            !video?<Loader/>:<div className=" m-2 border w-[1100px] flex flex-wrap">
            {video?.map((element) => {
              // console.log(element.id)
              return (
                <Link to={"/watch?v=" + element.id} key={element.id}>
                  <VideoCard info={element} />
                </Link>
              );
            })}
              </div>
           }
        </InfiniteScroll>
    
    );
  }
};

export default VideoContainer;
