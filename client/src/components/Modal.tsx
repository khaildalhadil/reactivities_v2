import { createPortal } from "react-dom"

type props = {
  children: React.ReactNode;
  setIsOpen: (status: boolean) => void,
}

export default function Modal({children, setIsOpen}: props) {
  return (
    createPortal(
      <div 
        className="h-screen w-screen absolute top-0 left-0 bg-gray-300/60 rounded" 
        onClick={()=> setIsOpen(false)}
      >
      <div 
        className="bg-white w-1/2  flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100"
        onClick={(e) => e.stopPropagation()}
        >
        <button 
          className="px-2 ml-auto m-2 rounded-full bg-red-400 text-amber-50 hover:bg-red-600 cursor-pointer" 
          onClick={()=> setIsOpen(false)} >X</button>
        {children}
      </div>
    </div>, document.body
    )
  )
}
