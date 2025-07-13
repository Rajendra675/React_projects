import React from 'react'
import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button 
            className='outline-none px-4 py-1 rounded-md bg-red-500 text-white hover:bg-red-600'
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button 
            className='outline-none px-4 py-1 rounded-md bg-green-500 text-white hover:bg-green-600'
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button 
            className='outline-none px-4 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600'
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
