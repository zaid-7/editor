import React from "react";
import { useEffect, useState } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(240); // Example: 4 minutes

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  return (
    <div>
      <p>{`Time left: ${Math.floor(timeLeft / 60)}:${timeLeft % 60}`}</p>
    </div>
  );
}

export default Timer;
