import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utilis/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoHorizontal from "./VideoHorizontal";
import VideoMetaData from "./VideoMetaData";

const WatchPage = () => {
  let [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex w-full">
        <div className="">
          <iframe
            width="850"
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
      <div className="px-5">
      <VideoMetaData/>
      <VideoHorizontal/>
      </div>
    </div>
  );
};

export default WatchPage;
