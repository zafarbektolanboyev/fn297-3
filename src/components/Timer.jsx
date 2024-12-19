import React, { useRef } from 'react'

function Timer() {
  const secondRef = useRef('')

  function handleStart(){
    let res = secondRef.current.value;
    if(res.length > 0){
    }
    
  }
  return (
    <div>
      <h1 className='text-white text-center text-2xl'>Timer</h1>
      <div className='border flex flex-row p-5 w-[370px] mx-auto rounded-xl'>
        <input type="number" className='bg-gray-350 p-[15px] rounded-md text-xl' ref={secondRef} placeholder='Enter second'/>
        <button className='bg-blue-600 text-white p-[15px] rounded-md text-xl' onClick={handleStart}>Start</button>
      </div>
    </div>
  )
}

export default Timer
