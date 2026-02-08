import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { TiGroupOutline, TiMessages } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function SideBarLinks() {
  return (
    <div className="border-b border-gray-300 border-t">
        <ul className="flex flex-col gap-5 mt-6">
          <Link to={"/"} className="flex  items-center gap-3 py-2 hover:bg-gray-200 text-2xl cursor-pointer pr-4 pl-1">
            <IoHomeOutline />
            <span>Home</span>
          </Link>
          <Link to={"/group"}>
            <li className="flex  items-center gap-3 py-2 hover:bg-gray-200 text-2xl cursor-pointer pr-4 pl-1">
                <TiGroupOutline />
                <span>Activities</span>
            </li>
          </Link>
          <li className="flex items-center gap-3 py-2 hover:bg-gray-200 text-2xl cursor-pointer pr-4 pl-1">
            <TiMessages />
            <span>Messages</span>
          </li>
          <li className="flex  items-center gap-3 py-2 hover:bg-gray-200 text-2xl cursor-pointer pr-4 pl-1 mb-3">
            <IoSettingsOutline />
            <span>Settings</span>
          </li>
        </ul>
      </div>
  )
}
