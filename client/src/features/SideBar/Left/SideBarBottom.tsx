
import { TbCalendarEventFilled } from "react-icons/tb";
import SideBarLinks from "./SideBarTop.tsx";
import { BiHide } from "react-icons/bi";
import { HiOutlineNewspaper } from "react-icons/hi";

export default function SideBarLeft() {
  return (
    <div className="mx-4 row-start-1 row-end-3">
      <h1 className="text-2xl font-bold mb-5">App Name</h1>
      <SideBarLinks />
      <div className="">

        <ul className="flex flex-col gap-5 mt-2">

          <li className="flex  items-center gap-3 py-2 hover:bg-gray-200 text-2xl cursor-pointer pr-4 pl-1">
            <TbCalendarEventFilled />
            <span>Event</span>
          </li>
          
          <li className="flex  items-center gap-3 py-2 hover:bg-gray-200 text-2xl cursor-pointer pr-4 pl-1">
            <BiHide />
            <span>Confessions</span>
          </li>

          <li className="flex  items-center gap-3 py-2 hover:bg-gray-200 text-2xl cursor-pointer pr-4 pl-1">
            <HiOutlineNewspaper />
            <span>News</span>
          </li>

        </ul>

      </div>      
    </div>
  )
}
