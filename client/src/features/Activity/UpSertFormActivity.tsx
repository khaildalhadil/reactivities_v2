import useActiviy from "../../stores/activity.store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addActivity, updateActivity } from "../../Services/activitys";
import { toast } from "react-toastify";
import Loadding from "../../components/Loadding";
// import ActivityDetails from "./ActivityDetails";

import {useForm} from 'react-hook-form'

type Props = {
  id: string | null,
  currentActiviy: ActiviteyType | null
}

export default function UpSertFormActivity({id, currentActiviy}: Props) {

  const type: string = typeof id == "string"? "Edit": "Add";

  const {register, handleSubmit, getValues, formState: {errors}} = useForm<ActiviteyType>();
  const setIsUpdateActivity = useActiviy(state=> state.setIsUpdateActivity);
  const setIsCreateNewActivity = useActiviy((state) => state.setIsCreateNewActivity);
  const setActivityCliked = useActiviy((state)=> state.setActivityCliked);

  // react query 
  const queryClient = useQueryClient();

  const {mutate: addMutation, isPending: isAddingNewActiviy} = useMutation({
    mutationFn: addActivity,
    onSuccess: ()=> {
      queryClient.invalidateQueries({queryKey: ["activitys"]})
      toast.success(`${getValues().title} Added successfully`)
      setIsCreateNewActivity(false);
    },
    onError: (err) => {
      toast.error(err.message);
    }
  })

  const {mutate: updateMuatation, isPending: isUpdatedingNewActivity} = useMutation({
    mutationFn: updateActivity,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["activitys"]})
      toast.success(`${getValues().title} updated successfully`);
      setIsUpdateActivity(false);
      setActivityCliked(null);
    }
  })

  // get current edit activity if id it here
  
  function handleCancel(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setIsCreateNewActivity(false)
    setIsUpdateActivity(false)
  }

  function handleUpSert(data: ActiviteyType) {
    
    const upSertObject: ActiviteyTypeToPost = data;
    if (type == "Add") {
      
      addMutation(upSertObject)
    } else {
      if (currentActiviy == null) return;
      const updateObject: ActiviteyType = {id: currentActiviy.id, ...upSertObject}
      setIsUpdateActivity(true);
      updateMuatation(updateObject)
    }
  }
  // get defaut 
  function defalueDate(date: string | undefined): string {
    if (date == null) return '';
    return date?.split('T')[0]

  }

  const getTodayDate = (): string => {
    const today = new Date();
    const year = today.getFullYear();
    // Months are zero-indexed, so add 1
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  };

  if (isAddingNewActiviy || isUpdatedingNewActivity) return <Loadding />

  return (
    <form 
      className="flex flex-col gap-4 p-2 bg-white m-3 shadow rounded sticky top-0" 
      onSubmit={handleSubmit(handleUpSert)} >

      <div className="flex flex-col">
        <label htmlFor="">name</label>
        <input 
          // value={title} 
          // onChange={(e) => setTitle(e.target.value)} 
          {...register('title', {required: 'this field required'})}
          name="title" 
          defaultValue={currentActiviy?.title} 
          className={`border text-gray-500 rounded block p-2 focus:outline-gray-200 ${errors.title ? 'border-red-300': 'border-gray-200'}`}
          type="text" 
          placeholder="Title" />
        {errors.title && <span className="text-red-300 text-sm">{errors.title.message}</span>}
        
      </div>
      
      <div className="flex flex-col">
        <label htmlFor="">description</label>
        <textarea 
          {...register('description', {required: 'this field required'})}
          name="description" 
          defaultValue={id? currentActiviy?.description: ''} 
          className={`border text-gray-500 rounded block p-2 focus:outline-gray-200 ${errors.description ? 'border-red-300': 'border-gray-200'}`}
          placeholder="Description" ></textarea>
        {errors.description && <span className="text-red-300 text-sm">{errors.description.message}</span>}
      </div>
      
      <div className="flex flex-col">
        <label htmlFor="">category</label>
        <input 
          {...register('category', {required: 'this field required'})}
          name="category" 
          defaultValue={id? currentActiviy?.category: ''} 
          className={`border  rounded block p-2 focus:outline-gray-200 ${errors.category ? 'border-red-300': 'border-gray-200'}`}
          type="text" 
          placeholder="Category" />

        {errors.category && <span className="text-red-300 text-sm">{errors.category.message}</span>}
      </div>
      
      <div className="flex flex-col"> 
        <label htmlFor="">date</label>
        <input 
          {...register('date', {required: 'this field required'})}
            name="date" 
            defaultValue={id ? defalueDate(currentActiviy?.date): getTodayDate()}
            className={`border  rounded block p-2 focus:outline-gray-200 ${errors.date ? 'border-red-300': 'border-gray-200'}`}
            type="date" 
          />
        {errors.date && <span className="text-red-300 text-sm">{errors.date.message}</span>}
      </div>

      <div className="flex flex-col"> 
        <label htmlFor="">city</label>
        <input 
          {...register('city', {required: 'this field required'})}
          name="city" 
          className={`border rounded block p-2 focus:outline-gray-200 ${errors.city ? 'border-red-300': 'border-gray-200'}`}
          type="text" 
          defaultValue={id? currentActiviy?.city: ''} 
          placeholder="City" />
          {errors.city && <span className="text-red-300 text-sm">{errors.city.message}</span>}
      </div>

      <div className="flex flex-col"> 
        <label htmlFor="">venue</label>
        <input 
          {...register('venue', {required: 'this field required'})}
          name="venue" 
          defaultValue={id? currentActiviy?.venue: ''} 
          className={`border rounded block p-2 focus:outline-gray-200 ${errors.venue ? 'border-red-500': 'border-gray-200'}`}
          type="text" 
          placeholder="Venue" />

        {errors.venue && <span className="text-red-300 text-sm">{errors.venue.message}</span>}
      </div>

      <div className="flex gap-2 justify-end">
        <button 
          onClick={(e) => handleCancel(e)}
          className="cursor-pointer border border-gray-300 rounded p-1">CANCEL</button>
        <button 
          className="cursor-pointer bg-green-800 px-5 rounded text-white"
          type="submit"
        >{type}</button>
      </div>
      
    </form>
  )
}