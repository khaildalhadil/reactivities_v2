import { useNavigate, useParams } from "react-router-dom";
import useActiviy from "../../stores/activity.store";
import UpSertFormActivity from "./UpSertFormActivity";
import useGetAllActivities from "../../lib/hooks/useGetAllActivities";


export default function ActivityDetails() {

  const {id} = useParams();
  const navigate = useNavigate();

  
  const {data, isLoading, isError, error} = useGetAllActivities();
  
  const activityCliked = data?.find(activity => activity.id == id);

  const isUpdateActivity = useActiviy(state=> state.isUpdateActivity);
  const setIsUpdateActivity = useActiviy(state=> state.setIsUpdateActivity);


  function onEditCliked() {
    setIsUpdateActivity(!isUpdateActivity);
  }
  
  if (!activityCliked) return;
  
  if (isLoading) return <div>Loadding ... </div>
  if (isError) return <div>{error?.message}</div>

  return (
    <>
      {isUpdateActivity ? <UpSertFormActivity id={activityCliked.id} currentActiviy={activityCliked} />: 
        <div className="">
          <img className="h-50 w-full object-cover" src="https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp" alt="" />
          <div className="m-2 flex flex-col gap-1">
            <h1>{activityCliked.title}</h1>
            <p>{activityCliked.date}</p>
            <p>{activityCliked.description}</p>
            <div className="flex gap-4">
              <button 
              className="px-2 py-1 bg-blue-500 rounded cursor-pointer text-white" 
              
              onClick={onEditCliked}>EDIT</button>
              <button 
              
                className="px-2 py-1 bg-gray-300 rounded cursor-pointer" 
                onClick={() => navigate(-1)}>Back</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}