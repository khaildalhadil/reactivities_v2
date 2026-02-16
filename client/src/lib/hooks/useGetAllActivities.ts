import { useQuery } from "@tanstack/react-query";
import { getAllActivity } from "../../Services/activitys";



export default function useGetAllActivities() {

  const {data, isLoading, isError, error} = useQuery(
    {
      queryKey: ["activitys"], 
      queryFn: getAllActivity
    }
  );

  return {data, isLoading, isError, error}
}