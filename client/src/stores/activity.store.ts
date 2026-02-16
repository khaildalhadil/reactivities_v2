import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useActiviy = create<ActivityUIState>()(
  devtools((set) => 
    (
      {
        activityCliked: null,
        isCreateNewActivity: false,
        isUpdateActivity: false,
        isopenToDelete: false,
        idToDelete: null,
        setIdToDelete: (id: string | null) => set(() => ({idToDelete: id})),
        setActivityCliked: (state: ActiviteyType | null) => set(()=> ({activityCliked: state})),
        setIsCreateNewActivity: (bool: boolean) => set(()=> ({isCreateNewActivity: bool})),
        setIsUpdateActivity: (bool: boolean) => set(()=> ({isUpdateActivity: bool})),
        setIsOpenToDelete: (bool: boolean) => set(()=> ({isopenToDelete: bool}))
      }
    )
  )
)

export default useActiviy;
