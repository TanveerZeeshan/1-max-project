import React, { useRef } from 'react'

const UseRefEx = () => {
    const inputName=useRef("")



  const inputvalueHandler =()=>{
console.log(inputName.current.value)
}
  return (
    <>
    <input type='text' ref={inputName}/>
    <button onClick={inputvalueHandler}>Click me</button>
    </>
  )
}

export default UseRefEx