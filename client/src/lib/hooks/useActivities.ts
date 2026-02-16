
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addActivity, deleteActivity, updateActivity } from '../../Services/activitys';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import useActiviy from '../../stores/activity.store';


export default function useActivities() {

  const queryClient = useQueryClient();
  const {register, handleSubmit, getValues, formState: {errors}} = useForm<ActiviteyType>();

  const setIsUpdateActivity = useActiviy(state=> state.setIsUpdateActivity);
  const setActivityCliked = useActiviy((state)=> state.setActivityCliked);
  const setIsCreateNewActivity = useActiviy((state) => state.setIsCreateNewActivity);
  const setIsOpenToDelete = useActiviy((state) => state.setIsOpenToDelete);


  
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

  const {mutate: deleteActiviteById} = useMutation({
    mutationKey: ["activitys"],
    mutationFn: deleteActivity,

    onSuccess: () =>{
      queryClient.invalidateQueries({queryKey: ["activitys"]});
      toast.success(`${getValues().title} deleted successfully`);
      setIsOpenToDelete(false);
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

  return {
    updateMuatation, 
    isUpdatedingNewActivity, 
    register, 
    handleSubmit, 
    getValues, 
    errors,
    addMutation,
    isAddingNewActiviy,
    deleteActiviteById
  }
}

