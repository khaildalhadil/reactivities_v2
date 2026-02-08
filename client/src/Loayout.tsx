import { Outlet } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import SideBarLeft from "./features/SideBar/Left/SideBarBottom.tsx";

export default function Loayout() {
  return (
    <div className="text-gray-700 p-5 h-screen grid grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr]">
      <Header  />

      <SideBarLeft  />

      <main className=" overflow-y-scroll bg-gray-50 p-5 rounded col-span-2">
        {<Outlet />}
      </main>

      <Footer />
    </div>
  )
}
