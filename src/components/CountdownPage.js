import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Countdown from 'react-countdown';
import { motion } from 'framer-motion';
import './CountdownPage.css';

const CountdownPage = ({ setConfettiCount }) => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(null);

  const handleOkHover = () => {
    setConfettiCount(500);
  };

  const handleOkLeave = () => {
    setConfettiCount(100);
  };

  const handleOkClick = () => {
    setConfettiCount(800);
    navigate('/question');
  };

  const targetDate = new Date('2024-06-18T03:00:00');

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>how was the exams?</span>;
    } else {
      return (
        <span>
          {days}d {hours}h {minutes}m {seconds}s
        </span>
      );
    }
  };

  const handleTick = () => {
    setCountdown(Date.now());
  };

  return (
    <motion.div
      className="countdown-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Nikta The Cute Kale Felezi</h1>
      <p className="text">this is not a countdown of your exam finish what so ever...</p>
      <div className="countdown">
        <Countdown
          date={targetDate}
          renderer={renderer}
          onTick={handleTick}
          key={countdown}
        />
      </div>
      <p className="text">Since You Only wanted the suprise in the evening this site will auto-terminate in 24 hours</p>
      <motion.button
        className="ok-button"
        onClick={handleOkClick}
        onHoverStart={handleOkHover}
        onHoverEnd={handleOkLeave}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Continue
      </motion.button>
    </motion.div>
  );
};

export default CountdownPage;
