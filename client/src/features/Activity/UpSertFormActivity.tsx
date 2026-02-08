import { useState } from "react";
import useActiviy from "../../stores/activity.store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addActivity } from "../../Services/activitys";
import { toast } from "react-toastify";
// import ActivityDetails from "./ActivityDetails";

type Props = {
  id: string | null
}

export default function UpSertFormActivity({id}: Props) {

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [venue, setVenue] = useState<string>('');
  const [isSumbit, setIsSumbit] = useState(false);
  
  const setIsUpdateActivity = useActiviy(state=> state.setIsUpdateActivity);

  const type: string = typeof id == "string"? "Edit": "Add"
  const setIsCreateNewActivity = useActiviy((state) => state.setIsCreateNewActivity);

  // react query 
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addActivity,
    onSuccess: ()=> {
      queryClient.invalidateQueries({queryKey: ["activitys"]})
      toast.success(`${title} Added successfully`)
      setIsCreateNewActivity(false);
    },
    onError: (err) => {
      toast.error(err.message);
    }
  })

  // get current edit activity if id it here
  
  function handleCancel(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setIsCreateNewActivity(false)
    setIsUpdateActivity(false)
  }
  
  
  function handleUpSert(e: React.MouseEvent<HTMLButtonElement>) {
    
    e.preventDefault();
    const arrayOfErrors: string[] = checkValidation();
    setIsSumbit(true);
    
    if (arrayOfErrors.length > 0) {
      return;
    }
    
    if (type == "Add") {

      mutation.mutate({
        title, 
        category,
        city,
        date,
        description,
        isCancelled: false,
        latitude: 0,
        longitude: 0,
        venue,
      })
    }
  }

  function checkValidation(): string[] {

    const allError: Array<string> = [];

    console.log(date);

    // if (title.length <= 2) allError[0] = "name should be more then 2 char";
    if (title.length <= 2) allError.push("title should be more then 2 char");
    if (description.length <= 2) allError.push("description should be more then 2 char");
    if (category.length <= 2) allError.push("category should be more then 2 char");
    if (city.length <= 2) allError.push("city should be more then 2 char");
    if (venue.length <= 2) allError.push("venue should be more then 2 char");
    if (date == "") allError.push("enter the date please");

    return allError;
  }

  return (
    <form className="flex flex-col gap-4 p-2 bg-white m-3 shadow rounded sticky top-0">

      <div className="flex flex-col">
        <input 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          name="title" 
          defaultValue={""} 
          className={`border  rounded block p-2 focus:outline-gray-200 ${isSumbit && title.length < 2 ? 'border-red-300': 'border-gray-200'}`}
          type="text" 
          placeholder="Title" />
        {isSumbit && title.length <= 2 && <span className="text-red-300 text-sm">title should be more then 2 char</span>}
        
      </div>
      
      <div className="flex flex-col">
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          name="description" 
          defaultValue={""} 
          className={`border rounded block p-2 focus:outline-gray-200 ${isSumbit && description.length < 2 ? 'border-red-300': 'border-gray-200'}`}
          placeholder="Description" ></textarea>
        {isSumbit && description.length <= 2 && <span className="text-red-300 text-sm">description should be more then 2 char</span>}
      </div>
      
      <div className="flex flex-col">
        <input 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          name="category" 
          defaultValue={""} 
          className={`border  rounded block p-2 focus:outline-gray-200 ${isSumbit && category.length < 2 ? 'border-red-300': 'border-gray-200'}`}
          type="text" 
          placeholder="Category" />

        {isSumbit && category.length <= 2 && <span className="text-red-300 text-sm">category should be more then 2 char</span>}

      </div>
      
      <div className="flex flex-col"> 
        <input 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          name="date" 
          defaultValue={""} 
          className={`border  rounded block p-2 focus:outline-gray-200 ${isSumbit && date.length < 2 ? 'border-red-300': 'border-gray-200'}`}
          type="date" 
          />
        
        {isSumbit && date.length <= 2 && <span className="text-red-300 text-sm">date is required</span>}
      </div>

      <div className="flex flex-col"> 
        <input 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
          name="city" 
          defaultValue={""} 
          className={`border rounded block p-2 focus:outline-gray-200 ${isSumbit && city.length < 2 ? 'border-red-300': 'border-gray-200'}`}
          type="text" 
          placeholder="City" />
          {isSumbit && city.length <= 2 && <span className="text-red-300 text-sm">city is required</span>}


      </div>

      <div className="flex flex-col"> 
        <input 
          value={venue}
          onChange={(e) => setVenue(e.target.value)} 
          name="venue" 
          defaultValue={""} className={`border rounded block p-2 focus:outline-gray-200 ${isSumbit && venue.length < 2 ? 'border-red-500': 'border-gray-200'}`}
          type="text" 
          placeholder="Venue" />

        {isSumbit && venue.length <= 2 && <span className="text-red-300 text-sm">venue is required</span>}
      </div>

      <div className="flex gap-2 justify-end">
        <button 
          onClick={(e) => handleCancel(e)}
          className="cursor-pointer border border-gray-300 rounded p-1">CANCEL</button>
        <button 
          className="cursor-pointer bg-green-800 px-5 rounded text-white"
          onClick={(e)=> handleUpSert(e)}>{type}</button>
      </div>
      
    </form>
  )
}