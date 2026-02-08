// import { DialogContent } from "./ui/dialog";

import { useState } from "react";
import PostActivity from "./PostActivity";
import { MdDeleteOutline } from "react-icons/md";
import { TiEdit } from "react-icons/ti";



export default function Post({post, handelDeletePost}) {
  
  const {id, name, message} = post;

  const [like, setLike] = useState(0);
  const [comment, setComment] = useState(0);



  return (
    <div className="bg-white mt-5 rounded px-5 py-4">
      <div className="flex justify-between ">
        <div className="flex items-center gap-4">
          
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" 
            alt="user image" 
            className="h-13 w-13 border-2 border-green-700 object-cover rounded-full " />
          {/* <img src={img} alt="user image" className="h-13 w-13 border-2 border-green-700 object-cover rounded-full " /> */}

          <div className="flex flex-col">
            <span className="font-bold w-35">{name}</span>
            {/* <span className="text-sm">{skill}</span> */}
          </div>
          
        </div>
        <div className="flex gap-2 items-center text-2xl">
          <MdDeleteOutline onClick={()=> handelDeletePost(id)} className="rounded-full cursor-pointer text-3xl hover:bg-red-300 p-1" />
          <TiEdit className="rounded-full cursor-pointer text-3xl  hover:bg-blue-300 p-1"  />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-end font-bold">{message}</p>
        <div className="flex items-center justify-between border-b py-3">
          {like >= 4 && <div className="flex relative">
            <img className="h-10 w-10 rounded-full  object-cover border-2 " src="/images/face-1.png" alt="" />
            <img className="h-10 w-10 rounded-full  object-cover border-2 absolute left-6" src="/images/face-5.png" alt="" />
            <img className="h-10 w-10 rounded-full  object-cover border-2 absolute left-12" src="/images/face-4.png" alt="" />
            <img className="h-10 w-10 rounded-full  object-cover border-2 absolute left-18" src="/images/face-3.png" alt="" />
            <img className="h-10 w-10 rounded-full  object-cover border-2 absolute left-24" src="/images/face-2.png" alt="" />
          </div>}
          
          <div className="flex gap-10 font-bold text-gray-500 ">
            <p className="">{comment} Comments</p>
            <p className="">{like} Likes</p>
          </div>
        </div>

        <PostActivity addLike={()=> setLike(like + 1)} />
      </div>

    </div>
  )
}
