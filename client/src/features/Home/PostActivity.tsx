import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
// import { BiSolidLike } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { ImGrin } from "react-icons/im";
import { IoSendOutline } from "react-icons/io5";

export default function PostActivity({addLike}) {

  const [comment, setComment] = useState("");
  const [showComment, setShowComment] = useState(false);
  
  return (
    <div>

      <div className="flex items-center justify-between border-b py-3 text-lg">
        <button className="flex  items-center gap-2 cursor-pointer hover:text-red-700" onClick={addLike}>
          <AiOutlineLike className="" />
          <span>Like</span>
          {/* <BiSolidLike /> */}
        </button>
        <button className={`flex items-center gap-2 cursor-pointer hover:text-blue-700 ${showComment && "text-blue-700"}`} onClick={()=> setShowComment(!showComment)}>
          <FaRegCommentAlt />
          <span>Comments</span>
        </button>
        <button className="flex  items-center gap-2 cursor-pointer hover:text-green-700">
          <FaRegShareFromSquare />
          <span>Share</span>
        </button>
      </div>
      {showComment && 
        <div className="flex items-center justify-between gap-3 my-3">
          <img src="/images/face-1.png" className="h-10 w-10 rounded-full object-cover" alt="" />
          <div className="relative w-full">
            <input 
              type="text" 
              className="bg-gray-100 rounded p-2 w-full" 
              value={comment}
              onChange={(e) => setComment(e.target.value)} 
            />
            <button className=" absolute right-0 top-1/2 -translate-y-1/2 pr-3 cursor-pointer"><ImGrin /></button>
          </div>
          <IoSendOutline className="p-2 text-4xl bg-blue-200 rounded text-blue-500 cursor-pointer" />
        </div>
      }
      
    </div>
  )
}
