import React from 'react'
import Button from './Button'

const btnList=["All","Gaming","Songs","Live","Soccer","Cricket","Cooking","Valentines","Jukebox","Javascript","Computers"]
const ButtonList = () => {
  return (
    <div className='flex'>
      {
        btnList.map((element,index)=>{
          //console.log(element)
         return <Button btnText={element} key={index}/>
        })
      }
      
      </div>
  )
}

export default ButtonList