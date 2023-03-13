import { useEffect } from "react"
import ChatMessage from "./ChatMessage"

const LiveChat = () => {
    useEffect(() => {
     const i=setInterval(()=>{
        // API Polling
        console.log("API Polling")
     },2000)
    
      return () => clearInterval(i)
    }, [])
    
  return (
    <div className='ml-2 w-full h-[500px]
    p-2 border border-black bg-slate-100 rounded-lg'>
        <ChatMessage name="Poonam" message="This is React js"/>
        <ChatMessage name="Poonam" message="This is React js"/>
        <ChatMessage name="Poonam" message="This is React js"/>
        <ChatMessage name="Poonam" message="This is React js"/>
    </div>
  )
}

export default LiveChat