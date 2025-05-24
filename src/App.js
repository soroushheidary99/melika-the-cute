import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import CountdownPage from './components/CountdownPage';
import QuestionPage from './components/QuestionPage';
import ThankYouPage from './components/ThankYouPage';
import SeeYouPage from './components/SeeYouPage';
import MobileWarning from './components/MobileWarning';
import { isMobileDevice } from './utils/deviceDetection';
import './App.css';

function App() {
  const [confettiCount, setConfettiCount] = useState(200);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile on component mount
    setIsMobile(isMobileDevice());

    // Optional: Re-check on window resize (for responsive testing)
    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Show mobile warning if on mobile device
  if (isMobile) {
    return <MobileWarning />;
  }

  // Show normal app for PC users
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<CountdownPage setConfettiCount={setConfettiCount}/>} />
          <Route path="/question" element={<QuestionPage confettiCount={confettiCount} setConfettiCount={setConfettiCount}/>} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/see-you" element={<SeeYouPage />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
