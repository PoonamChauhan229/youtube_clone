import React from "react";
import { ShimmerThumbnail, ShimmerText,ShimmerCategoryItem } from "react-shimmer-effects";
const Loader = () => {
  return (
    <div className=" w-[1100px] flex flex-wrap">
      { Array(4).fill("").map((element,index)=>{
        return <div className='m-2 p-2 shadow-lg w-[259px] hover:bg-gray-300'>       
        <ShimmerThumbnail height={160} rounded />
        <ShimmerCategoryItem
          hasImage
          imageType="circular"
          imageWidth={50}
          imageHeight={50}
          text
          />
        
    </div>
        })
    }
    </div>
  );
};

export default Loader;
