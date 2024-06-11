import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css';

const BackButton = () => {
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    navigate(-1);
  };

  return (
    <div className="back-button" onMouseDown={handleMouseEnter}>
      &#8592;
    </div>
  );
};

export default BackButton;