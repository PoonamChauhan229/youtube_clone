import React from "react";
import moment from "moment";
import { LazyLoadImage } from 'react-lazy-load-image-component';
const CommentSection = ({
  authorDisplayName,
  authorProfileImageUrl,
  publishedAt,
  textDisplay
}) => {
  // console.log(authorDisplayName,
  //  authorProfileImageUrl,
  //  publishedAt,
  //  textDisplay);

  return (
    <div className="w-[750px] border-b-[2px] border-grey-500 flex text-sm">
      {/* <img
        src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
        alt=""
        className="rounded-full mr-3 w-[50px] h-[50px]"
      /> */}
      <span className="commentsBlock w-[50px] mr-3 my-1">
           <LazyLoadImage alt="i" effect="blur" src={authorProfileImageUrl} />
        </span>
      <div className="authorDetails w-[700px]">
        <p className="mb-1">
          <span className="font-semibold">{authorDisplayName}</span> • {moment(publishedAt).fromNow()}
        </p>
        <p className="mb-0 font-medium">{textDisplay}</p>
      </div>
      
    </div>

    
  );
};

export default CommentSection;
