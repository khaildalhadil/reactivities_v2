import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Loayout from "./Loayout";
import About from "./pages/About";
import Groups from "./features/Activity/Activity";
import Contect from "./pages/Contect";
import Home from "./features/Activity/Home";
import { ToastContainer } from "react-toastify";
// import SingleActivities from "./features/Activity/SingleActivities";
import ActivityDetails from "./features/Activity/ActivityDetails";
import CreateActivity from "./features/Activity/CreateActivity";

function App() {

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route element={<Loayout />} path="/" >
            <Route element={<Navigate to="/" replace />} path="/home" />
            <Route element={<Home />} path="/"/>
            <Route element={<About />} path="about" />
            <Route element={<Groups />} path="activities" />
            <Route element={<ActivityDetails  />} path="activities/:id" />
            <Route element={<CreateActivity />} path="createActivity" />
            <Route element={<Contect />} path="contect" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;