import { CiClock2, CiLocationOn } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import useActiviy from "../../stores/activity.store";
import { Link } from "react-router-dom";


export default function GroupPost({ActiviteyType}: ActivityCardProps){
  
  const setIsOpenToDelete = useActiviy((state) => state.setIsOpenToDelete);
  const setIdToDelete = useActiviy((state) => state.setIdToDelete);

  return (
    <>
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
                onClick={()=> {
                  setIsOpenToDelete(true)
                  setIdToDelete(ActiviteyType.id)
                }}
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
            <Link to={`/activities/${ActiviteyType.id}`}
              className="bg-blue-500 p-1 px-3 rounded-lg text-white cursor-pointer">
                View</Link>
          </div>
        </div>
    </div>

    </>
  )
}