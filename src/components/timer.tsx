"use client";
import React, { useEffect, useState } from "react";

function Timer() {
  const [currentTime, setCurrentTime] = useState<string>("00:00:00 PM");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "numeric",
      hour12: true,
    });

    const timerId = setInterval(() => {
      const timer = formatter.format(new Date());
      setCurrentTime(timer);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [setCurrentTime]);

  return <time>{currentTime}</time>;
}

export default Timer;
