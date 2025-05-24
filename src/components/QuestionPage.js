import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import './QuestionPage.css';
import BackButton from './BackButton';

const QuestionPage = ({confettiCount, setConfettiCount}) => {
  const navigate = useNavigate();
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showHoverConfetti, setShowHoverConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const handleYesClick = () => {
    navigate('/thank-you');
    setConfettiCount(500)
  };

  const handleYesHover = () => {
    setConfettiCount(confettiCount + 100);
    setShowHoverConfetti(true);
  };

  const handleYesHoverEnd = () => {
    setShowHoverConfetti(false);
  };

  const handleNoMouseEnter = (event) => {
    const button = event.target;
    const buttonRect = button.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const maxX = screenWidth - buttonRect.width - 200;
    const maxY = screenHeight - buttonRect.height - 200;
    const x =  Math.random() * maxX - maxX * 0.5;
    const y =  Math.random() * maxY - maxY * 0.5;
    console.log(x)
    console.log(screenWidth)
    setConfettiCount(25)
    setNoButtonPosition({ x, y });
  };

  return (
    <motion.div
      className="question-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >   
      {showHoverConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={1000}
          gravity={2}
          wind={0}
          initialVelocityY={10}
          recycle={true}
          opacity={0.7}
          colors={['#ff69b4', '#87ceeb', '#98fb98', '#dda0dd', '#f0e68c', '#ffa07a']}
        />
      )}
      <div className="question-container">
      <h5 className="question">want to grab a cup of coffee and discuss if god can create a stone so heavy that even he can't lift it?</h5>
      </div>
      <div className="button-container">
        <motion.button
          className="yes-button"
          onClick={handleYesClick}
          onHoverStart={handleYesHover}
          onHoverEnd={handleYesHoverEnd}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Hell YES!
        </motion.button>
        <motion.button
          className="no-button"
          onMouseEnter={handleNoMouseEnter}
          initial={{ x: 0, y: 0 }}
          animate={{ x: noButtonPosition.x, y: noButtonPosition.y }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          NO, get a life!
        </motion.button>
      </div>
    <BackButton />
    </motion.div>
  );
};

export default QuestionPage;