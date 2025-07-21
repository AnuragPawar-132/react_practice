import React, { useRef, useState } from 'react'

const UseRef = () => {

    const [password, setPassword] = useState("");
    const inputRef = useRef();
    const [message, setMessage] = useState("")

    const checkPassword = () => {
        return password.length > 5
    }

    const submitForm = () => {
        if(checkPassword()){
            alert("Form Submitted")
        }else{
            inputRef.current.focus();
            setMessage("Password must be atleast 5 characters")
        }
    }

  return (
    <div>
        <input className='w-[200px] h-[50px] focus:border-red-500' ref={inputRef} placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
        <p>{message}</p>
        <button className='border-2 w-[200px] h-[50px]' onClick={submitForm}>Submit</button>
    </div>
  )
}

export default UseRef