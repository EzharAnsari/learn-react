import { useEffect, useState } from "react";

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("set interval has been started!");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // this is cleanup function
    return () => {
      clearInterval(intervalId);
      console.log("set interval has been cleared!");
    };
  }, []);

  return (
    <p className="lead">
      This is the current time: <span>{time.toLocaleDateString()}</span> -{" "}
      <span>{time.toLocaleTimeString()}</span>
    </p>
  );
}

export default Time;
