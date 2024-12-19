import React, { useEffect, useState } from 'react';

function Timer() {
  const [isRun, setIsrun] = useState(false); 
  const [second, setSecond] = useState('');

  useEffect(() => {
    let intervalPom;

    if (isRun && second > 0) {
      intervalPom = setInterval(() => {
        setSecond((prevSecond) => {
          if (prevSecond > 1) {
            return prevSecond - 1;
          } if(prevSecond === 0){
            alert('Vaqt tugadi')
          } else {
            setIsrun(false);
            clearInterval(intervalPom);
            return 0;
          }
          
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalPom);
    };
  }, [isRun, second]);

  function handleStart  (){
    if (second > 0) {
      setIsrun(true);
    }
  };

  return (
    <div>
      <h1 className="text-white text-center text-2xl">Timer</h1>
      <div className="border flex flex-row p-5 w-[370px] mx-auto rounded-xl">
        <input
          type="number"
          className="bg-gray-350 p-[15px] rounded-md text-xl mr-2"
          onChange={(e) => setSecond(Number(e.target.value))}
          placeholder="Enter seconds"
        />
        <button
          className="bg-blue-600 text-white p-[15px] rounded-md text-xl"
          onClick={handleStart}
        >
          Start
        </button>
      </div>
      {isRun && (
        <div className="text-center mt-5 text-white text-xl">
          Time remaining: {second} seconds
        </div>
      )}
    </div>
  );
}

export default Timer;
