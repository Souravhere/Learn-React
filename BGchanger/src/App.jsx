import { useState } from 'react'

function App() {
  const [color,setcolor] = useState("red")

  return (
    <div className='w-full h-screen duration-300' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-4 inset-x-1 px-2'>
        <div className='flex flex-wrap items-center justify-evenly gap-4 bg-white p-3 rounded-full'>
          <button className='outline-none px-4 rounded-full font-bold py-2' style={{background:"red"}} onClick={()=>{setcolor("red")}}>Red</button>
          <button className='outline-none px-4 rounded-full font-bold py-2' style={{background:"green"}} onClick={()=>{setcolor("green")}}>Green</button>
          <button className='outline-none px-4 rounded-full font-bold py-2' style={{background:"pink"}} onClick={()=>{setcolor("pink")}}>Pinke</button>
          <button className='outline-none px-4 rounded-full font-bold py-2' style={{background:"blue"}} onClick={()=>{setcolor("blue")}}>Blue</button>
          <button className='outline-none px-4 rounded-full font-bold py-2' style={{background:"white"}} onClick={()=>{setcolor("white")}}>White</button>
        </div>
      </div>
    </div>
  )
}

export default App
