import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utilis/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utilis/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");

  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      //console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20)+"😉",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div
        className="ml-2 w-full h-[500px]
    p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll"
      >
        <div>
          {chatMessages.map((element) => (
            <ChatMessage name={element.name} message={element.message} />
          ))}
        </div>
      </div>
      <form className="w-full p-2 ml-2 border border-black"
      onSubmit={(e)=>{
        e.preventDefault();
        console.log("onform Submit",liveMessage)
      dispatch(addMessage({
        name:"Pooonam",
        message:liveMessage
      }))
      setLiveMessage("");      
      }}
      >
        <input
          type="text"
          className="w-96"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
