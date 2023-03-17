import React from 'react'

const Shimmer = () => {
  return (
    
   <div className='w-full flex flex-wrap'>
       { Array(4).fill("").map((element,index)=>{
        return <div className='m-2 p-2 shadow-lg w-[284px] h-[300px] hover:bg-gray-300'></div>
        })
    }
        </div>
   
  )
}

export default Shimmer