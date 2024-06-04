import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length,setlength] = useState(8) // This useState for the password length
  const [number,setnumber] = useState(false) //This useState for the add number add in password
  const [character,setcharacter] = useState(false) //This useState for the add character in password
  const [Password, setpassword] = useState("") //This useState for the final password

  // Method to generate Password
  // This method is under the useCallback() - it means the all variable data will stored in the case  
  const passwordgenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (character) str += "!@#$%^&*()_+-={}[]|;<>/?"
    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)
  }
  ,[length,number,character,setpassword])
  
  //useref hook is used to get the referance  
  const passwordref = useRef(null)
const copypasswordclip = useCallback(()=>{
  passwordref.current?.select() //here we will used the useref hook to make the text copy effact 
  window.navigator.clipboard.writeText(Password)
},[Password])

// Here we use the UseEffect() to callthe function when any change performed
useEffect(()=>{
  passwordgenerator()
},[length,number,passwordgenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto bg-gray-800 m-8 px-4 py-5 rounded-xl text-orange-400'>
    <h1 className='font-bold text-center text-3xl p-3'>Password Generator</h1> 
    <div>
      {/* This is the input field to show the password  and it have readOnly attrubit it means the user can't edit the text here */}
      <input type="text" value={Password} className='inline-block outline-none w-full py-1 px-3 my-3 rounded-md text-black font-semibold' placeholder='Password' readOnly ref={passwordref}/>
      <button onClick={copypasswordclip} className='inline-block w-full rounded-lg py-1 my-2 font-bold text-white tracking-wider bg-blue-600 hover:bg-blue-500 duration-500'>COPY</button>
    </div>
    <div>
      {/* This input range is  it contains the attributs min and max with it we can fixed the range of the input*/}
      <div className='flex items-center justify-center my-3'>
        {/* this input for the password length */}
        <input type="range" min={8} max={40} value={length} 
        className='cursor-pointer'
        onChange={(e)=>{
          setlength(e.target.value)
        }}
        />
        <label className='font-semibold ml-2'>Length : {length}</label>
      </div>
      <div className='flex items-center justify-center gap-4 my-3'>
        <div className='cursor-pointer'>
           {/* this input for the number add */}
        <input type="checkbox" 
        defaultChecked={number}
        id="numberInput"
        onChange={()=> {
          // prev - it means the previous value
          setnumber((prev) => !prev);
        }}
        />
        <label htmlFor='numberInput' className='font-semibold ml-1'>Numbers</label>
        </div>
        <div className='cursor-pointer'>
           {/* this input for the special charaters add */}
        <input type="checkbox" 
        defaultChecked={character}
        id="characterInput"
        onChange={()=> {
          // this functino is defined on top in useState and it will reverse the conditions
          setcharacter((prev) => !prev);
        }}
        />
        <label htmlFor='characterInput' className='font-semibold ml-1'>Characters</label>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
