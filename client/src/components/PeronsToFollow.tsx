import { useState } from "react";
import { FaUserCheck } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

export default function PeronsToFollow({img, name, skill}) {

  const [add, setAdd] = useState(false);

  return (
    <li className="flex justify-between items-center gap-4 px-3 py-2">
      <img src={img} alt="" className="h-13 w-13 border-2 border-green-700 object-cover rounded-full " />
      <div className="flex flex-col">
        <span className="font-bold w-35">{name}</span>
        <span className="text-sm">{skill}</span>
      </div>
      <button onClick={() => setAdd(!add)} className="bg-green-700 p-3 rounded-full text-white text-lg cursor-pointer" >
        {add ? <FaUserCheck />: <IoMdAdd  />}
      </button>
    </li>
  )
}
