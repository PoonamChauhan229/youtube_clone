import React from "react";
import moment from "moment";
import numeral from "numeral";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";
const VideoMetaData = () => {
  return (
    <div className="py-1 w-[750px]">
      <h5 className="font-bold">Video Title</h5>
      <div className="flex justify-between align-middle font-medium">
        <span>
          {numeral(10000).format("0.a")} Views •{moment("2020-06-6").fromNow()}
        </span>

        <div className="flex">
          <span className="mr-3 flex p-0 leading-none">
            <MdThumbUp size={20} />
            {numeral(10000).format("0.a")}
          </span>
          <span className="flex leading-none">
            <MdThumbDown size={20} />
            <span>{numeral(10000).format("0.a")}</span>
          </span>
        </div>
      </div>

      <div className="flex justify-between align-middle my-2 py-1 border-y-[0.2px] border-gray-500">
        <div className="flex">
          <img
            src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
            alt=""
            className="rounder-circle mr-3 w-[50px] h-[50px]"
          />
          <div className="flex flex-col font-bold">
            <span>Backbench Coder</span>
            <span> {numeral(10000).format("0.a")} Subscribers</span>
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
          anchorClass="showMoreText"
          expanded={false}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          cupiditate, aspernatur a modi, nostrum porro suscipit vero ratione
          pariatur eos atque dignissimos tempora autem corporis officia option
          Lorem ipsum dolor sit amet consectetur adipis elit. Doloremque
          cupiditate, aspernatur a modi, nostrum porro suscipit vero ratione
          pariatur eos atque dignissimos tempora autem corporis officia option
          Lorem ipsum dolor sit amet consectetur adipis elit. Doloremque
          cupiditate, aspernatur a modi, nostrum porro suscipit vero ratione
          pariatur eos atque dignissimos tempora autem corporis officia option
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
