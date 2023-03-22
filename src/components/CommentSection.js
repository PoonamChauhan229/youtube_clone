import React from 'react'
import moment from 'moment'
const CommentSection = ({snippet}) => {
   console.log(snippet)

  return (
    <div className='border-b-[2px] border-grey-500 p-2 flex text-sm'>
         <img
            src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
            alt=''
            className='rounded-full mr-3 w-[50px] h-[50px]'
         />
         <div className=''>
            <p className='mb-1'>
               Sumit Dey • {moment('2020-05-05').fromNow()}
            </p>
            <p className='mb-0'>Nice Video DUDE!!!</p>
         </div>
      </div>
  )
}

export default CommentSection