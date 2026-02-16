import agent from "../lib/api/agent";

export async function getAllActivity(): Promise<ActiviteyType[]> {
  
  const res = await agent.get<ActiviteyType[]>('/Activities');
  return res.data;
  
};

export async function addActivity(activity:ActiviteyTypeToPost): Promise<ActiviteyTypeToPost | null> {

  try {
    const res = await agent.post<ActiviteyTypeToPost>("/Activities", activity);
    return res.data;
  } catch(err ) {
    console.log(err);
    return null;
  }
}

export async function updateActivity(activity:ActiviteyType): Promise<ActiviteyType | null> {
  console.log(activity);
  try {
    const res = await agent.put<ActiviteyType>("/Activities", activity);
    return res.data;
  } catch(err ) {
    console.log(err);
    return null;
  }
}

export async function deleteActivity(id: string) {
  try {
    await agent.delete<string>(`/Activities/${id}`);
  } catch(err ) {
    console.log(err);
    return null;
  }
}
