
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { API_Key, YOUTUBE_COMMENTS_LIST_API } from '../utilis/constants';
import CommentSection from './CommentSection'

const VideoComments = () => {
   
   const videoData = useSelector((store) => store.videoResults);
   const { isVideo, videoId } = videoData;
   const[commentList,setCommentList]=useState([])

   useEffect(() => {
     
      getCommentsData()
   }, [videoId])
   

   async function getCommentsData() {
      let data = await fetch(YOUTUBE_COMMENTS_LIST_API+videoId+"&key="+API_Key);
      let json = await data.json();
    // console.log(json.items);
     setCommentList(json?.items)         
    }
    //console.log(commentList)
   return (
    <div className='comments'>
         <p>1234 Comments</p>
         <div className='flex w-full my-2'>
            <img
               src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
               alt=''
               className='rounded-full mr-3 w-[50px] h-[50px] object-contain'
            />
            <form className='flex grow'>
               <input
                  type='text'
                  className='grow input'
                  placeholder='Write a comment...'
               />
               <button className='border-0 p-2 bg-slate-600 text-white hover:bg-gray-900'>Comment</button>
            </form>
         </div>
      <div className='comments__list'>
            {commentList.map((element,index) => (
               <CommentSection {...element} key={index}/>
            ))}
         </div>
      </div>
  )
}

export default VideoComments