import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useActiviy = create<ActivityUIState>()(
  devtools((set) => 
    (
      {
      isCreateNewActivity: false,
      isUpdateActivity: false,
      setIsCreateNewActivity: (bool: boolean) => set(()=> ({isCreateNewActivity: bool})),
      setIsUpdateActivity: (bool: boolean) => set(()=> ({isUpdateActivity: bool}))
      }
    )
  )
)

export default useActiviy;
