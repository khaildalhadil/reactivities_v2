import { useState } from "react";
import { CiClock2, CiLocationOn } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import Modal from "../../components/Modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteActivity } from "../../Services/activitys";
import { toast } from "react-toastify";


export default function GroupPost({ActiviteyType, showTheView}: ActivityCardProps){
  
  const [isopenToDelete, setIsOpenToDelete] = useState(false);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["activitys"],
    mutationFn: deleteActivity,

    onSuccess: () =>{
      queryClient.invalidateQueries({queryKey: ["activitys"]});
      toast.success(`${ActiviteyType.title} deleted successfully`);
      setIsOpenToDelete(false);
    }
  })

  function handleDeleteActivity() {
    mutation.mutate(ActiviteyType.id);
  }

  return (
    <div className="flex flex-col mt-10" id={ActiviteyType.id}>
      
      <p className="bg-blue-400 p-3 w-fit rounded-e-2xl font-bold text-white">{ActiviteyType.date.split("T")[0]}</p>
    
        <div className="rounded shadow border border-gray-300 mt-2">
          <div className="border-b border-gray-400 p-2 flex justify-between">
            <div className="flex items-center gap-5">
              <img src="images/face-1.png" alt="person" className="h-15 w-15 object-cover rounded-full" />
              <div className="">
                <p className="font-bold text-lg">{ActiviteyType.title}</p>
                <p>Hosted by <span className="text-blue-600 font-bold">khalid</span></p>
              </div>
            </div>
            <div>
              <MdDeleteOutline 
                onClick={()=> setIsOpenToDelete(true)}
                className="text-4xl text-red-500 hover:bg-gray-100 rounded-full p-1 cursor-pointer" />
            </div>
          </div>

          <div className="flex gap-5 p-3">
            <p className="flex items-center gap-2"><CiClock2 />{ActiviteyType.date.split("T")[1].split(":")[0]}:{ActiviteyType.date.split("T")[1].split(":")[1]} AM</p>
            <p className="flex items-center gap-2"><CiLocationOn />{ActiviteyType.venue}, {ActiviteyType.city}</p>
          </div>

          <div className="bg-gray-100 p-3 flex gap-3 items-center">
            <p className="text-lg" >Joined</p>
            <div className="flex relative">
              <img className="h-10 w-10 rounded-full  object-cover border-2 border-gray-200 " src="/images/face-1.png" alt="" />
              <img className="h-10 w-10 rounded-full  object-cover border-2 border-gray-2 absolute left-6" src="/images/face-5.png" alt="" />
              <img className="h-10 w-10 rounded-full  object-cover border-2 border-gray-200 absolute left-12" src="/images/face-4.png" alt="" />
              <img className="h-10 w-10 rounded-full  object-cover border-2 border-gray-200 absolute left-18" src="/images/face-3.png" alt="" />
              <img className="h-10 w-10 rounded-full  object-cover border-2 border-gray-200 absolute left-24" src="/images/face-2.png" alt="" />
            </div>
          </div>

          <div className="flex justify-between p-3">
            <p>{ActiviteyType.description}</p>
            <button 
              onClick={()=> showTheView(ActiviteyType.id)}
              className="bg-blue-500 p-1 px-3 rounded-lg text-white cursor-pointer">
                View</button>
          </div>

        </div>


        {
          isopenToDelete && <Modal setIsOpen={setIsOpenToDelete}>
            <p className="text-center text-2xl font-bold mt-10 text-gray-700">Do you want to delet {ActiviteyType.title} ?</p>
            <div className="text-center mt-10">
              <button 
                onClick={handleDeleteActivity}
                className="bg-red-500 px-2 py-1 rounded text-gray-100 font-bold cursor-pointer" >Delete</button>
            </div>
          </Modal>
        }
    </div>
  )
}