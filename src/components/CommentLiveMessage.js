import React from "react";
import moment from "moment";
import { LazyLoadImage } from 'react-lazy-load-image-component';
const CommentLiveMessage = ({
  name,message
}) => {
  

  return (
    <div className="border-b-[2px] border-grey-500 p-2 flex text-sm">
      {/* <img
        src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
        alt=""
        className="rounded-full mr-3 w-[50px] h-[50px]"
      /> */}
      <span className="commentsBlock">
           <LazyLoadImage alt="i" effect="blur" src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" />
          </span>
      <div className="">
        <p className="mb-1">
          {name} • {moment().fromNow()}
        </p>
        <p className="mb-0">{message}</p>
      </div>      
    </div>
  );
};

export default CommentLiveMessage;
