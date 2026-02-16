import GroupPost from "./ActivityPost";
import useActiviy from "../../stores/activity.store";
import Modal from "../../components/Modal";
import useActivities from "../../lib/hooks/useActivities";
import useGetAllActivities from "../../lib/hooks/useGetAllActivities";
import { Link } from "react-router-dom";

export default function Groups() {

  const setActivityCliked = useActiviy((state)=> state.setActivityCliked);
  const isopenToDelete = useActiviy(state => state.isopenToDelete);
  const setIsOpenToDelete = useActiviy((state) => state.setIsOpenToDelete);
  

  const {data, isLoading, isError, error} = useGetAllActivities();

  function handleViewCliecd(id: string) {
    if (!data) return;
    const activity = data.find(activity => activity.id == id);
    if (activity == undefined || activity == null) return;
    setActivityCliked(activity);
  }

  const {deleteActiviteById} = useActivities();

  const idToDelete = useActiviy((state) => state.idToDelete);

  function handleDeleteActivity() {
    if (idToDelete == null) return;
    deleteActiviteById(idToDelete);
  }

  // console.log(searchParams.get("filter"))
  if (isLoading) return <div>Loadding ... </div>
  if (isError) return <div>{error?.message}</div>

  return (
    <>
      <h1 className="font-bold text-3xl">All Activitys {data?.length}</h1>
      <Link 
        to={"/createActivity"}
        className=" block border p-2 text-gray-600 mt-10 w-3/5 rounded cursor-pointer border-gray-400 text-center ">
          Add Activity
      </Link>
      <div className="flex relative">

        <div className="flex-3">
          {data?.map(activity => <GroupPost key={activity.id} showTheView={handleViewCliecd} ActiviteyType={activity} handleDeleteActivity={handleDeleteActivity} />)}
        </div>
        
        <div className="flex-2 relative">
          <div className=" bg-white rounded border border-gray-200 m-4 h-fit sticky top-0">
            <p>setteing</p>
          </div>
          {/* {isCreateNewActivity && <UpSertFormActivity id={null} currentActiviy={null} />}

          {!isCreateNewActivity && activityCliked && <div className=" bg-white rounded border border-gray-200 m-4 h-fit sticky top-0">  
            <ActivityDetails 
              cancelActivityView={handleAcvitityCancel} 
              />
            </div>} */}
        </div>

      {
        isopenToDelete && <Modal setIsOpen={setIsOpenToDelete}>
          <p className="text-center text-2xl mt-10 text-gray-700">Do you want to delete ?</p>
          <div className="mt-10 flex gap-3 justify-center">
            <button 
              onClick={() => setIsOpenToDelete(false)}
              className=" border px-4 py-1 rounded text-gray-500 font-bold cursor-pointer mb-10" >Cancel</button>
            <button 
              onClick={handleDeleteActivity}
              className="bg-red-500 px-2 py-1 rounded text-gray-100 font-bold cursor-pointer mb-10" >Delete</button>
          </div>
        </Modal>
      }
      </div>
    </>
    
  )
}
