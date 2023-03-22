import moment from "moment";
import numeral from "numeral";
import React, { useEffect, useState } from "react";
import { API_Key, YOUTUBE_CHANNEL_API } from "../utilis/constants";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch } from "react-redux";
import { channelSubscriber,channelThumbnails } from "../utilis/channelSlice";

const VideoCard = ({ info}) => {
 // console.log(info)
  const dispatch=useDispatch()
  const { snippet, id,contentDetails,statistics} = info;
  const { channelId, channelTitle, title, publishedAt, thumbnails } = snippet;
  const{duration }=contentDetails
  const{viewCount}=statistics
  
  const [channelIcon, setChannelIcon] = useState(null);
  useEffect(() => {
    getChannelDetails();
  }, [id,channelId]);
  //console.log(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_Key}`)
  
  //console.log(YOUTUBE_CHANNEL_API+channelId+"&key="+API_Key)
  async function getChannelDetails() {
    let data = await fetch(YOUTUBE_CHANNEL_API+channelId+"&key="+API_Key);
    let json = await data.json();
    //console.log(json?.items) 
    setChannelIcon(json.items[0].snippet.thumbnails.default.url);     
    dispatch(channelSubscriber(json.items[0].statistics.subscriberCount))
    dispatch(channelThumbnails(json.items[0].snippet.thumbnails.default.url))
    
  }


  // duration -install moment library

  const seconds = moment.duration(duration).asSeconds();
  const newDuration = moment.utc(seconds * 1000).format("mm:ss");

  return info === undefined ? null : (
    <div className="m-2 p-2 shadow-lg w-[257px] h-89 hover:bg-gray-300">
      {/* <img className="rounded-lg" src={thumbnails?.medium?.url} alt="thumbnail" /> */}
      <LazyLoadImage alt="i" effect="blur" src={thumbnails?.medium?.url} />
      
      <span>{newDuration}</span>
      <ul>
        <li className="font-bold whitespace-nowrap	overflow-hidden text-ellipsis">
          {title}
        </li>
        <li className="font-medium py-2">
          <i className="bi bi-eye-fill "></i> {numeral(viewCount).format("0.a")}{" "}
          Views
        </li>
        <li className="font-semibold">{moment(publishedAt).fromNow()}</li>
        <div className="flex channelBlock">
          {/* <img
            className="rounded-full w-10 h-10 shadow"
            src={channelIcon}
            alt="thumbnail"
          /> */}
          <LazyLoadImage alt="i" effect="blur" src={channelIcon} height={5} />
          <li className="font-semibold py-3 ml-2">{channelTitle}</li>
        </div>
      </ul>
    </div>
  );
};

export default VideoCard;
