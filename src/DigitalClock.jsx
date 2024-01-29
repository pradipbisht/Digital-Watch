/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalid = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalid);
    };
  }, []);

  function formateTime() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${hours}:${minutes}:${seconds} ${meridiem}`;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formateTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
