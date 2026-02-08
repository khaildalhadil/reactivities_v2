import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Loayout from "./Loayout";
import About from "./pages/About";
import Groups from "./features/Activity/Activity";
import Contect from "./pages/Contect";
import Home from "./features/Activity/Home";
import { ToastContainer } from "react-toastify";

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
            <Route element={<Groups />} path="group" />
            <Route element={<Contect />} path="contect" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;