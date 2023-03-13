import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import {addMessage} from '../utilis/chatSlice'
import { generateRandomName, makeRandomMessage } from "../utilis/helper";
import ChatMessage from "./ChatMessage"


const LiveChat = () => {
  const dispatch=useDispatch();

  const chatMessages=useSelector(store=>store.chat.messages)
    useEffect(() => {
     const i=setInterval(()=>{
        // API Polling
        console.log("API Polling");
        dispatch(addMessage({
          name:generateRandomName(),
          message:makeRandomMessage(20),
        }))
     },2000)
    
      return () => clearInterval(i)
    }, [])
    
  return (
    <div className='ml-2 w-full h-[500px]
    p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll'>
        {chatMessages.map((element)=>(
          <ChatMessage name={element.name} message={element.message}/>
        ))}
    </div>
  )
}

export default LiveChat