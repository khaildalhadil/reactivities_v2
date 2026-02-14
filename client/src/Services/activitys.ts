import axios from "axios";

const apiClient = axios.create({
  baseURL: 'https://localhost:5001/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

export async function getAllActivity(): Promise<ActiviteyType[]> {
  
  const res = await apiClient.get<ActiviteyType[]>('/Activities');
  return res.data;
  
};

export async function addActivity(activity:ActiviteyTypeToPost): Promise<ActiviteyTypeToPost | null> {

  try {
    const res = await apiClient.post<ActiviteyTypeToPost>("/Activities", activity);
    return res.data;
  } catch(err ) {
    console.log(err);
    return null;
  }
}

export async function updateActivity(activity:ActiviteyType): Promise<ActiviteyType | null> {
  console.log(activity);
  try {
    const res = await apiClient.put<ActiviteyType>("/Activities", activity);
    return res.data;
  } catch(err ) {
    console.log(err);
    return null;
  }
}

export async function deleteActivity(id: string) {
  try {
    await apiClient.delete<string>(`/Activities/${id}`);
  } catch(err ) {
    console.log(err);
    return null;
  }
}
