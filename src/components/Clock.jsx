import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Clock() {
  const [watch, setWatch] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setInterval(() => {
      const data = new Date();
      setWatch(data.toLocaleTimeString());
    }, 1000);
  }, []);
  function handleTimer() {
    navigate("/timer");
  }
  return (
    <div>
      <div className="border w-[300px] p-5 rounded-xl text-gray-300 bg-gray-400 text-2xl mx-auto mt-6">
        <h1>Digital watch</h1>
        <h1>{watch}</h1>
        <button className="btn text-white p-[15px] bg-blue-500 w-full rounded-md mt-2" onClick={handleTimer}>
          Timer
        </button>
      </div>
    </div>
  );
}

export default Clock;
