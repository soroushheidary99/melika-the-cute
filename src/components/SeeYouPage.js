import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SeeYouPage.css';

const SeeYouPage = () => {
  const navigate = useNavigate();


  return (
    <div className="see-you-container">
      <p>*-*</p>
      <h1>you just made one person happier in life</h1>
    </div>
  );
};

export default SeeYouPage;