import React, { useState } from 'react'
import Button from './Button'

const btnList=["All","Gaming","Songs","Love","BollyWood","Live","Soccer","Cricket","Cooking","Valentines","Jukebox","Javascript","Computers"]
 const ButtonList = () => {
 

 
  return (
    <div className='flex scrollbar-hide w-[1100px] overflow-x-scroll'>
      {
        btnList.map((element,index)=>{
          //console.log(element)
         return <Button btnText={element} key={index}
         />
        })
      }
      
      </div>
  )
}

export default ButtonList