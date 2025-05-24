import React from 'react';
import '../styles/MobileWarning.css';

const MobileWarning = () => {
  return (
    <div className="mobile-warning">
      <div className="mobile-warning-content">
        <div className="mobile-warning-icon">💻</div>
        <h1 className="mobile-warning-title">Oops! PC Only! 🖥️</h1>
        <p className="mobile-warning-message">
          I'm sorry, I can only function on a PC! :D
        </p>
        <p className="mobile-warning-submessage">
          Please visit this page on your desktop or laptop computer for the full experience.
        </p>
        <div className="mobile-warning-decoration">
          <span>🖱️</span>
          <span>⌨️</span>
          <span>🖥️</span>
        </div>
      </div>
    </div>
  );
};

export default MobileWarning; 