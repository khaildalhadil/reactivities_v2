import { useQuery } from "@tanstack/react-query";
import GroupPost from "./ActivityPost";
import { getAllActivity } from "../../Services/activitys";
// import Details from "./ActivityDetails";
import ActivityDetails from "./ActivityDetails";
import useActiviy from "../../stores/activity.store";
import UpSertFormActivity from "./UpSertFormActivity";
// import { CiFilter } from "react-icons/ci";
// import { useSearchParams } from "react-router-dom";

export default function Groups() {

  // const [searchParams, setSearchParams] = useSearchParams();
  // const [activityCliked, setActivityCliked] = useState<ActiviteyType | null>();

  const isCreateNewActivity = useActiviy((state)=> state.isCreateNewActivity);
  const setActivityCliked = useActiviy((state)=> state.setActivityCliked);
  const activityCliked = useActiviy((state)=> state.activityCliked);
  

  const {data, isLoading, isError, error} = useQuery(
    {
      queryKey: ["activitys"], 
      queryFn: getAllActivity
    }
  );

  function handleViewCliecd(id: string) {
    if (!data) return;
    const activity = data.find(activity => activity.id == id);
    if (activity == undefined || activity == null) return;
    setActivityCliked(activity);
  }

  function handleAcvitityCancel() {
    setActivityCliked(null);
  }

  // console.log(searchParams.get("filter"))
  if (isLoading) return <div>Loadding ... </div>
  if (isError) return <div>{error.message}</div>

  return (
    <>
      <h1 className="font-bold text-3xl">All Activitys {data?.length}</h1>

      <div className="flex relative">

        <div className="flex-3">
          {data?.map(activity => <GroupPost key={activity.id} showTheView={handleViewCliecd} ActiviteyType={activity} />)}
        </div>
        
        {/* <UpSertFormActivity id={activityCliked.id} />:  */}

        <div className="flex-2 relative">
          {isCreateNewActivity && <UpSertFormActivity id={null} currentActiviy={null} />}

          {!isCreateNewActivity && activityCliked && <div className=" bg-white rounded border border-gray-200 m-4 h-fit sticky top-0">  
            <ActivityDetails 
              cancelActivityView={handleAcvitityCancel} 
              />
            </div>}
          
        </div>

        {/* <div className="flex-1 p-2 bg-white rounded border border-gray-200 m-4 h-fit">
          <div className="">

            <div className="flex items-center gap-3 text-lg border-b border-b-gray-300 p-2">
              <CiFilter className="text-2xl"/>
              <p>Filters</p>
            </div>

            <div 
              onClick={()=>setSearchParams("?filter=all")} 
              className={`flex items-center gap-3 text-lg border-b border-b-gray-300 p-2 hover:bg-gray-100 cursor-pointer ${searchParams.get("filter") == "all" ? "bg-gray-100 text-blue-500": "bg-white"}`} >
              <p>All Activities</p>
            </div>

            <div 
              onClick={()=>setSearchParams("?filter=going")} 
              className={`flex items-center gap-3 text-lg border-b border-b-gray-300 p-2 hover:bg-gray-100 cursor-pointer ${searchParams.get("filter") == "going" ? "bg-gray-100 text-blue-500": "bg-white"}`} >
              <p>I'm Going</p>
            </div>

            <div 
              onClick={()=>setSearchParams("?filter=hosting")} 
              className={`flex items-center gap-3 text-lg border-b border-b-gray-300 p-2 hover:bg-gray-100 cursor-pointer ${searchParams.get("filter") == "hosting" ? "bg-gray-100 text-blue-500": "bg-white"}`} >
              <p>I'm Hosting</p>
            </div>

          </div>
        </div> */}
      </div>
    </>
    
  )
}
