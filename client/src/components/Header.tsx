import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import useActiviy from "../stores/activity.store";

export default function Header() {

  const setIsCreateNewActivity = useActiviy((state) => state.setIsCreateNewActivity);

  return (
    <header className=" mb-5 flex-1 col-span-2 col-start-2">
      <nav>
        <ul className="flex justify-between items-center">
          <li className="flex gap-2 items-center relative w-1/5">
            <CiSearch className="text-2xl absolute " />
            <input type="text" className="border border-gray-100 text-gray-600 outline outline-gray-400 rounded p-1 pl-8 w-full" />
          </li>
          <li className="flex gap-5 items-center  border border-gray-200 p-2 rounded">
            <button 
              onClick={() => setIsCreateNewActivity(true)}
              className="bg-blue-400 border p-2 font-bold text-white rounded cursor-pointer">
                Add Activity
            </button>
            <p className="font-bold texts"> Khalid Alhadi</p>
            <FaRegUserCircle className="text-3xl"/>
          </li>
        </ul>
      </nav>
    </header>
  )
}
