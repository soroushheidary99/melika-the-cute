import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './QuestionPage.css';
import BackButton from './BackButton';

const QuestionPage = ({confettiCount, setConfettiCount}) => {
  const navigate = useNavigate();
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const handleYesClick = () => {
    navigate('/thank-you');
    setConfettiCount(500)
  };

  const handleYesHover = () => {
    setConfettiCount(confettiCount + 100)
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
      <h5 className="question">want to discuss over our islam advertisement over a cup of coffee?</h5>
      <h4 className="question-sub" style={{"fontWeight": "100", "marginTop": "-20px", "marginBottom": "50px"}}>Do not try to say no, Try if u don't believe me</h4>
      <div className="button-container">
        <motion.button
          className="yes-button"
          onClick={handleYesClick}
          onHoverStart={handleYesHover}
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
          Ew, NO!
        </motion.button>
      </div>
    <BackButton />
    </motion.div>
  );
};

export default QuestionPage;