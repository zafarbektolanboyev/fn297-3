import React, { useState, useEffect } from 'react'

function LocalTime() {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div>
      <h2>Local Time</h2>
      <h4>{time.toLocaleTimeString()}</h4>
    </div>
  )
}

export default LocalTime