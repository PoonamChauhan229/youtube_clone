import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_Key, YOUTUBE_COMMENTS_LIST_API } from "../utilis/constants";
import CommentSection from "./CommentSection";
import { addMessage } from "../utilis/chatSlice";
import CommentLiveMessage from "./CommentLiveMessage";

const VideoComments = () => {
  const videoData = useSelector((store) => store.videoResults);
  const { isVideo, videoId,commentNum } = videoData;
  const [commentList, setCommentList] = useState([]);
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
   if(videoId){
    getCommentsData();
   }
  }, [videoId]);

  async function getCommentsData() {
    let data = await fetch(
      YOUTUBE_COMMENTS_LIST_API + videoId + "&key=" + API_Key
    );
    let json = await data.json();
    // console.log(json.items);
    setCommentList(json?.items);
  }
  //console.log(commentList)
  return (
    <div className="comments w-[750px]">
      <p className="font-medium">{commentNum} Comments</p>
      <div className="commentssubheading flex w-full my-2">
        <img
          src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
          alt=""
          className="rounded-full mr-3 w-[50px] h-[50px] object-contain"
        />
        <form
          className="flex grow"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("onform Submit", liveMessage);
            dispatch(
              addMessage({
                name: "Pooonam",
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }}
        >
          <input
            type="text"
            className="grow input"
            placeholder="Write a comment..."
            value={liveMessage}
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
          />
          <button className="border-0 p-2 bg-slate-600 text-white hover:bg-gray-900">
            Comment
          </button>
        </form>
      </div>
      <div className="comments__list">
        {chatMessages?.map((element) => (
          <CommentLiveMessage name={element.name} message={element.message} />
        ))}

        {commentList.map((element, index) => (
          <CommentSection
            {...element.snippet.topLevelComment.snippet}
            key={index}
            name={element.name}
            message={element.message}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoComments;
