import React from 'react'

import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const VideoHorizontal = () => {
    const seconds = moment.duration('100').asSeconds()
    const _duration = moment.utc(seconds * 1000).format('mm:ss')    
  

   return (
      <div className='flex border-b-[0.3px] border-solid border-gray-600 m-1 py-2 align-center'>
         <div className='left'>
            <LazyLoadImage
               src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
               effect='blur'
               className='videoHorizontal__thumbnail'
            />
            <span className='duration'>{_duration}</span>
         </div>
         <div className='text-sm right p-0 ml-2'>
            <p className='font-bold mb-1'>
               Be a full stack developer in 1 month
            </p>
            <div>
            <i class="bi bi-eye-fill"></i> {numeral(1000000).format('0.a')} Views •
               {moment('2020-06-09').fromNow()}
            </div>
            <p>Backbench Coder</p>
            </div>
         </div>
   )
    
}

export default VideoHorizontal