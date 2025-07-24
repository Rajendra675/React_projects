import { useState ,useCallback,useEffect,useRef} from 'react'
import React from 'react'


import './index.css'


function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const passwordRef = useRef(null)

  const handleLengthChange = (e) => {
    setLength(e.target.value)
  }

  const handleCopy = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  const handleGenerate = useCallback(() => {
    let pass= ""
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?'

    if (numberAllowed) str += numbers
    if (charAllowed) str += symbols
    // const password = str.slice(0, length)
    // setPassword(password)

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    handleGenerate()
  }, [length, numberAllowed, charAllowed, handleGenerate])

  return (
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
    <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef} />
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={handleCopy}>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={handleLengthChange} id='length' name='length' />
        <label htmlFor="length">Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => setNumberAllowed((prev) => !prev)} />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked={charAllowed} id='charInput' onChange={() => setCharAllowed((prev) => !prev)} />
        <label htmlFor="charInput">Characters</label>
      </div>
    </div>

   </div>
  )
}

export default App
