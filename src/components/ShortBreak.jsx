import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function ShortBraek() {
  const [isRun, setIsrun] = useState(false);
  const [timeMin, setTimeMin] = useState(5);
  const [timeSec, setTimeSec] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    if (isRun) {
      const intervalPom = setInterval(() => {
        if (timeSec > 0) {
          setTimeSec((timeSec) => timeSec - 1);
        }
        if (timeSec === 0) {
          setTimeMin((timeMin) => timeMin - 1);
          setTimeSec(59);
        }
        if (timeMin === 0 && timeSec === 0) {
          setIsrun(false);
          clearInterval(intervalPom);
          navigate('/longbreak')
        }
      }, 1000);
      return () => {
        clearInterval(intervalPom);
      };
    }
  }, [isRun, timeMin, timeSec]);
  function handleClick() {
    setIsrun(true);
  }
  function handlePausa(){
    setIsrun(false)
  }
  function handleRest(){ 
    setIsrun(false)
    setTimeMin(5)
    setTimeSec(0)
  }
  function handlePomo(){
    navigate('/')
  }
  function handleShort(){
    navigate('/shortBraek')
  }
  function handleLong(){
    navigate('/longbreak')
  }

  return (
    <div className="flex container">
      <div className="bg-[#C15C5C] flex-col text-xl justify-between p-[20px] text-white flex h-[200px] mx-auto mt-[50px] w-[400px] rounded-md ">
        <div className="flex justify-between">
          <h1 className="cursor-pointer " onClick={handlePomo}>Pomodoro</h1>
          <h1 className="cursor-pointer" onClick={handleShort}>Short Break</h1>
          <h1 className="cursor-pointer" onClick={handleLong}>Long Break</h1>
        </div>
        <div>
          <h1 className="text-3xl text-center">
            {timeMin} : {timeSec < 10 ? "0" + timeSec : timeSec}
          </h1>
        </div>
        <div className="flex gap-1">
        <button
          onClick={handleClick}
          className="btn bg-white w-[150px] mx-auto text-[#C15C5C] mt-[20px] p-[15px] rounded-2xl"
        >
          Start
        </button>
        <button onClick={handlePausa} className="btn bg-white w-[150px] mt-[20px] mx-auto text-[#C15C5C] p-[15px] rounded-2xl">Pausa</button>
        <button onClick={handleRest} className="btn bg-white w-[150px] mt-[20px] mx-auto text-[#C15C5C] p-[15px] rounded-2xl">Restart</button>
        </div>
      </div>
    </div>
  );
}

export default ShortBraek;