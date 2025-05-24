import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Countdown from 'react-countdown';
import { motion } from 'framer-motion';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import './CountdownPage.css';

const CountdownPage = ({ setConfettiCount }) => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(null);
  const [confettiCount, setLocalConfettiCount] = useState(50);
  const { width, height } = useWindowSize();

  const targetDate = new Date('2026-05-03T00:00:00');

  const calculateConfettiCount = () => {
    const now = new Date();
    const timeRemaining = targetDate.getTime() - now.getTime();
    
    if (timeRemaining <= 0) {
      return 1000;
    }
    
    const daysRemaining = Math.ceil(timeRemaining / (1000 * 60 * 60 * 24));
    const maxDays = 365;
    const minConfetti = 50;
    const maxConfetti = 1000;
    const ratio = Math.max(0, Math.min(1, (maxDays - daysRemaining) / maxDays));
    const calculatedCount = Math.round(minConfetti + (ratio * (maxConfetti - minConfetti)));
    
    return Math.max(minConfetti, Math.min(maxConfetti, calculatedCount));
  };

  useEffect(() => {
    const updateConfetti = () => {
      const newCount = calculateConfettiCount();
      setLocalConfettiCount(newCount);
      setConfettiCount(newCount);
    };

    updateConfetti();

    const interval = setInterval(updateConfetti, 3600000);

    return () => clearInterval(interval);
  }, [setConfettiCount]);

  const handleOkClick = () => {
    navigate('/question');
  };

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Happy Birthday! 🎉🎂</span>;
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
      <Confetti
        width={width}
        height={height}
        numberOfPieces={confettiCount}
        gravity={0.05}
        wind={0}
        initialVelocityY={3}
        recycle={true}
        opacity={0.7}
        colors={['#ff69b4', '#87ceeb', '#98fb98', '#dda0dd', '#f0e68c', '#ffa07a']}
      />
      <h1>Melika The Cute</h1>
      <div className="countdown">
        <Countdown
          date={targetDate}
          renderer={renderer}
          onTick={handleTick}
          key={countdown}
        />
      </div>
      <p className="text">Since I missed ur last bday, this is a count down to ur next bday :D</p>
      <motion.button
        className="ok-button"
        onClick={handleOkClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Continue
      </motion.button>
    </motion.div>
  );
};

export default CountdownPage;
