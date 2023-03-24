import React, { useEffect ,useState} from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utilis/appSlice";
import { commentCount, durationResults, loadingStatus, videoIdResults, videoIdStatus } from "../utilis/videoIdSlice";

import VideoComments from "./VideoComments";
import VideoHorizontal from "./VideoHorizontal";
import VideoMetaData from "./VideoMetaData";
import { useSelector } from 'react-redux'

import { API_Key, VIDEO_DETAILS_API, YOUTUBE_RELATED_VIDEOS_API } from "../utilis/constants";
const WatchPage = () => {
  const videoData=useSelector((store)=>store.videoResults)
  const {isVideo, videoId,loading}=videoData
  //console.log(videoData)

  // console.log(loading)
  const [videofetchData, setvideofetchData] = useState([]);
  const [relatedVideo,setRelatedVideo]=useState([])
  // const [vId,setVId]=useState(videoId)
  let [searchParams] = useSearchParams();
  // //console.log(searchParams.get("v"));
  // //console.log(searchParams);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(()=>{
    dispatch(videoIdResults(searchParams.get("v")));
    dispatch(videoIdStatus(!isVideo))
  },[])

    useEffect(() => {
    getVideoMetaData();
    getRelatedVideos()
  }, [videoId]);

   
  async function getVideoMetaData() {
    if(videoId !=null){
      //console.log(VIDEO_DETAILS_API + videoId + "&key=" + API_Key)
      const data = await fetch(VIDEO_DETAILS_API + videoId + "&key=" + API_Key);
      const json = await data.json();
      //console.log(json?.items[0]);
      setvideofetchData(json?.items[0]);      
      dispatch(commentCount(json?.items[0]?.statistics?.commentCount))
      dispatch(durationResults(json?.items[0]?.contentDetails.duration))
    }
  }

  async function getRelatedVideos(){
    if(videoId !=null){
      console.log(YOUTUBE_RELATED_VIDEOS_API + videoId + "&key=" + API_Key)
      const data = await fetch(YOUTUBE_RELATED_VIDEOS_API + videoId + "&key=" + API_Key);
      const json = await data.json();
     // console.log(json?.items);
      setRelatedVideo(json?.items)
  }}
 
  // //console.log(loading)
  return (
    <>
    <div className="flex flex-col">
      <div className="px-5 flex w-full">
        <div className="">
          <iframe
            width="750"
            height="450"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          
        </div>
      </div>
     {!videofetchData?<h5>Loading</h5>: <div className="px-5">
      <VideoMetaData videofetchData={videofetchData}/>
      <VideoComments/>
      </div>}
    </div>
    <div className='flex flex-col'>
    {!videofetchData?<h5>Loading</h5>:
      relatedVideo.map((element,index)=><VideoHorizontal {...element} key={index}/>)
    
  } 
  </div>
  {/* <VideoHorizontal/> */}
    </>
  );
};

export default WatchPage;
