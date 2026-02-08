
import { useState } from "react";
import { CiImageOn, CiVideoOn } from "react-icons/ci";
import { addPost } from "../Services/postApis";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export default function AddPost() {

  const [message, setMessage] = useState("");
  const queryClient = useQueryClient();

  const addNewPost = useMutation({
    mutationFn: addPost,

    // لو نجحت 
    onSuccess: () => {
      // اعاده جلب البيانات
      queryClient.invalidateQueries({queryKey: ["posts"]})

    },
    onError: (err) => {
      console.log(err);
    }
  })

  async function hendleSumbit() {

    const userPost = {
      Name: "Khalid", 
      Message: message
    }
    await addNewPost.mutateAsync(userPost);
  }

  return (
    <div className="bg-white rounded p-3">
      <div className="flex gap-3">
        <img src="images/face-1.png" alt="my-img" className="h-11 w-11 rounded-full object-cover" />
        <textarea 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text" 
          className="bg-gray-100 rounded px-5 py-2 w-full outline outline-gray-100 text-gray-600" placeholder="What's Happening?" />
      </div>
      <div className="flex justify-between p-3">
        <button className="flex items-center gap-3 text-gray-500 border border-gray-300 rounded px-5 cursor-pointer">
          <CiVideoOn />
          <span>Video</span>
        </button>
        <button className="flex items-center gap-3 text-gray-500 border border-gray-300 rounded px-5 cursor-pointer">
          <CiImageOn />
          <span>Image</span>
        </button>
        <button 
          disabled={message.length <2 || addNewPost.isPending}
          onClick={hendleSumbit}
          className={`flex items-center gap-3  px-5 rounded text-white p-1 ${message.length<2? "cursor-not-allowed bg-gray-300": "cursor-pointer bg-green-700"}`}>
          {addNewPost.isPending? "Adding" :"Post"}
        </button>
      </div>
    </div>
  )
}
