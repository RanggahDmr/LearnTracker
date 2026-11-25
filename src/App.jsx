import { Building } from "lucide-react"
import { useState } from "react";

function App() {
const [name, setName] = useState("");
const [category, setCategory] = useState("");
const [time, setTime] = useState("");
const [date, setDate] = useState("");



  return (
    <>
      <div className='flex  items-center '>
        <div className='flex p-2 gap-2 bg-blue-200 rounded-2xl justify-center shadow-md mt-2 mb-2 w-full'>
          <Building size={50} color="#000000" />
          <h1 className='font-bold text-5xl text-black'>Learning Tracker</h1>
        </div>
      </div>
      <div className="flex items-center justify-center bg-gray-200">
        APAPPA

        <div className="flex-1 bg-amber-200 pl-2">  
          <form action="Search Bar">
            <input type="text" className="border-gray-400 border bg-white" placeholder="search bar"/>
            <button type="submit" className="bg-green-500 rounded-2xl m-2 p-2">
            Its button
          </button>
          
          </form>
          
          <tr>
            <td>
            </td>
          </tr>
        </div>  
      </div>
    </>
  )
}

export default App
