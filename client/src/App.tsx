import { Button, List, ListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import axios from "axios";

function App() {

  const[data, setData] = useState<ActiviteyType[]>([]);

  useEffect(()=> {

    async function getDataFromServer() {
      const res = await axios.get<ActiviteyType[]>("https://localhost:5001/api/Activities");
      setData(res.data); 
    }

    getDataFromServer();

    return () => console.log("Clean Now ... ");
    
  }, [])

  return (
    <>
      <Typography  >All Activity</Typography>
      <List>
        {data.map(activity => <ListItem key={activity.id}>{activity.title}</ListItem>)}
        <div className="flex gap-5">
          <Button variant="outlined" className="" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </div>
      </List>
      
    </>
  )
}

export default App;