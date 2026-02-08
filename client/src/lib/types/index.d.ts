type ActiviteyType = {
  id: string;
  title: string;
  city: string;
  category: string;
  description: string;
  venue: string;
  latitude: number;
  longitude: number;
  isCancelled: boolean;
  date: string;
};

type ActiviteyTypeToPost = {
  title: string;
  city: string;
  category: string;
  description: string;
  venue: string;
  latitude: number;
  longitude: number;
  isCancelled: boolean;
  date: string;
};

type ActivityCardProps = {
  ActiviteyType: ActiviteyType
  showTheView: (id: string)=> void
}

type ActivityUIState = {
  isCreateNewActivity: boolean,
  setIsCreateNewActivity: (boolean) => void;
  isUpdateActivity: boolean,
  setIsUpdateActivity: (boolean) => void;
}