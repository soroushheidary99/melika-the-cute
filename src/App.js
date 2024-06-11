import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import CountdownPage from './components/CountdownPage';
import QuestionPage from './components/QuestionPage';
import ThankYouPage from './components/ThankYouPage';
import SeeYouPage from './components/SeeYouPage';
import './App.css';

function App() {
  const [confettiCount, setConfettiCount] = useState(200);

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
