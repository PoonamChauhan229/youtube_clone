import React, { useEffect } from 'react'


const VideoCard = ({info}) => {
  useEffect(()=>{
    getVideoDetails()
  })

  async function  getVideoDetails(){

  }
   // console.log(info)
    const {snippet,statistics}=info;
    const {channelId,channelTitle,title,publishedAt,thumbnails}=snippet
    return (info===undefined)?null:  (
    <div className='m-2 p-2 shadow-lg w-[283px] h-96 hover:bg-gray-300'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnail" />
        <ul>
            <li className='font-bold whitespace-nowrap	overflow-hidden text-ellipsis'>{title}</li>
            <li className='font-semibold'>{channelTitle}</li>
            <li className='font-medium py-2'><i class="bi bi-eye-fill "></i>{" "}{(statistics.viewCount/1000000).toFixed(1)}m Views</li>
        </ul>
    </div>
  )
}

export default VideoCard