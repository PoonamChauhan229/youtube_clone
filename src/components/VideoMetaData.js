import React, { useEffect, useState } from "react";
import moment from "moment";
import numeral from "numeral";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";
import { useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
const VideoMetaData = ({videofetchData}) => {
  const videoData = useSelector((store) => store.videoResults);
  const channelSubscriberData=useSelector((store)=>store.channelResults)
  console.log(channelSubscriberData)
  //console.log(videoData);
  //console.log(channelData)
  const {isChannel, channelSubscriber,channelThumbnails}=channelSubscriberData

  const { isVideo, videoId } = videoData;
  console.log(isVideo, videoId);
  console.log(videofetchData)
    const { snippet, statistics } = videofetchData; 
  return (
    <div className="py-1 w-[750px]">
      <h5 className="font-bold">{snippet?.title}</h5>
      <div className="flex justify-between align-middle font-medium">
        <span>
          {numeral(statistics?.viewCount).format("0.a")} Views •{moment(snippet?.publishedAt).fromNow()}
        </span>

        <div className="flex">
          <span className="mr-3 flex p-0 leading-none">
            <MdThumbUp size={20} />
            {numeral(statistics?.likeCount).format("0.a")}
          </span>
          <span className="flex leading-none">
            <MdThumbDown size={20} />
            <span>{numeral(statistics?.commentCount).format("0.a")}</span>
          </span>
        </div>
      </div>

      <div className="flex justify-between align-middle my-2 py-1 border-y-[0.2px] border-gray-500">
        <div className="flex">
        <LazyLoadImage
               src={channelThumbnails}
               effect='blur'
               className='videoMetaData__thumbnail'
            />
          {/* <img
            src={channelThumbnails}
            alt=""
            className="rounded border-gray-50 border shadow mr-3 w-[50px] h-[50px]"
          /> */}
          <div className="flex flex-col font-bold">
            <span>{snippet?.channelTitle}</span>
            <span> {numeral(channelSubscriber).format("0.a")} Subscribers</span>
          </div>
        </div>

        <button className="bg-red-600 text-white uppercase hover:bg-violet-600 border-0 p-2 m-2">
          Subscribe
        </button>
      </div>
      <div className="text-sm	border-b-[3px] m-4 font-medium">
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorclassName="showMoreText"
          expanded={false}
        >
          {snippet?.description}
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
