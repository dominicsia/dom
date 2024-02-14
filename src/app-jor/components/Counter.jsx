import React, { useState, useEffect } from 'react';
import './Counter.css';

function Counter() {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());
  const [fontSize, setFontSize] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const calculateFontSize = () => {
      const windowWidth = window.innerWidth;
      const newFontSize = Math.max(windowWidth / 10, 65);

      setFontSize(newFontSize);
    };
  
    calculateFontSize();
    window.addEventListener('resize', calculateFontSize); 
  
    return () => {
      window.removeEventListener('resize', calculateFontSize);
    };
  }, []);

  function getTimeRemaining() {
    const targetDate = new Date('May 21, 2023 01:00:00');
    const now = new Date();

    const totalSeconds = Math.max(Math.floor((now - targetDate) / 1000), 0);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div id="counter-container" className="counter-container">
      <h3 className="title">It has been...</h3>
      <div id="counter-content">
        <p className="time" style={{ fontSize: `${fontSize}px` }}>{timeRemaining.days} Days</p>
        <p className="time" style={{ fontSize: `${fontSize/2}px` }}>{timeRemaining.hours} Hours</p>
        <p className="time" style={{ fontSize: `${fontSize/3}px` }}>{timeRemaining.minutes} Minutes</p>
        <p className="time" style={{ fontSize: `${fontSize/4}px` }}>{timeRemaining.seconds} Seconds</p>
        <h5 className="since">since that 21st of May~</h5>
      </div>
    </div>
  );
}

export default Counter;