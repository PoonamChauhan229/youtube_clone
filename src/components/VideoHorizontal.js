import React from 'react'

import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const VideoHorizontal = ({id,snippet}) => {
   const {title,publishedAt,channelId,description,thumbnails,channelTitle}=snippet
    const seconds = moment.duration('100').asSeconds()
    const _duration = moment.utc(seconds * 1000).format('mm:ss')    
  

   return (
      
         <div className=' flex border-b-[0.3px] border-solid border-gray-600 m-1 py-2 align-center'>
         <div className='left w-[25%] h-[68px]'>
            <LazyLoadImage
               src={thumbnails?.medium?.url}
               effect='blur'
               className='w-[130px] h-[65px]'
            />
            <span className='duration'>{_duration}</span>
         </div>
         <div className='text-sm right p-0 ml-2 w-[75%]'>
            <p className='font-bold mb-1'>
               {title}
            </p>
            <div>
            <i className="bi bi-eye-fill"></i> {numeral(1000000).format('0.a')} Views •
               {moment(publishedAt).fromNow()}
            </div>
            <p>{channelTitle}</p>
            </div>
         </div>
    
   )
    
}

export default VideoHorizontal