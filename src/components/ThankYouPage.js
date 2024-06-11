import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './ThankYouPage.css';
import BackButton from './BackButton';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
  const navigate = useNavigate();
  
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState('');
  const [selectedActivity, setSelectedActivity] = useState('');
  const [comments, setComments] = useState('');
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isActivityOpen, setIsActivityOpen] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [isHourOpen, setIsHourOpen] = useState(false); 

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleHourChange = (event) => {
    setSelectedHour(event.target.value);
  };

  const handleActivityChange = (event) => {
    setSelectedActivity(event.target.value);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform form submission logic here, send the form to this email: soroush.h.dev@gmail.com
    const formData = {
      date: selectedDate.toLocaleDateString(),
      hour: selectedHour,
      activity: selectedActivity,
      comments: comments,
    };
  
    const emailBody = `
      Date: ${formData.date}
      Hour: ${formData.hour}
      Activity: ${formData.activity}
      Comments: ${formData.comments}
    `;
    const mailtoURL = `mailto:soroush.h.dev@gmail.com?subject=Date%20Confirmation&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoURL;
    // Reset form fields
    setSelectedDate(new Date());
    setSelectedHour('');
    setSelectedActivity('');
    setComments('');
    navigate('./../see-you');
  };

  return (
    <motion.div
      className="thank-you-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="thank-you-text">Thank You, Please fill out the form</h1>
      <p className="message">Didn't think you would come this far</p>
      <form className="date-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <motion.div
            className="form-label custom-font"
            onClick={() => setIsDateOpen(!isDateOpen)}
            initial={false}
            animate={{ backgroundColor: isDateOpen ? '#fff' : '#000', color: isDateOpen ? '#000' : '#fff' }}
          >
            Select Date
          </motion.div>
          <AnimatePresence>
            {isDateOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Calendar id="date" value={selectedDate} onChange={handleDateChange} className="custom-font" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      <div className="form-group">
          <motion.div
            className="form-label custom-font"
            onClick={() => setIsHourOpen(!isHourOpen)}
            initial={false}
            animate={{ backgroundColor: isHourOpen ? '#fff' : '#000', color: isHourOpen ? '#000' : '#fff' }}
          >
            Select Hour
          </motion.div>
          <AnimatePresence>
            {isHourOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <input
                  type="time"
                  id="hour"
                  value={selectedHour}
                  onChange={handleHourChange}
                  required
                  className="custom-font"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="form-group">
          <motion.div
            className="form-label custom-font"
            onClick={() => setIsActivityOpen(!isActivityOpen)}
            initial={false}
            animate={{ backgroundColor: isActivityOpen ? '#fff' : '#000', color: isActivityOpen ? '#000' : '#fff' }}
          >
            Select Activity
          </motion.div>
          <AnimatePresence>
            {isActivityOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <select
                  id="activity"
                  value={selectedActivity}
                  onChange={handleActivityChange}
                  required
                  className="custom-font"
                >
                  <option value="">Choose an activity</option>
                  <option value="pizza">Pizza</option>
                  <option value="coffee">Coffee</option>
                  <option value="falafel">Falafel</option>
                  <option value="bandari">Bandari</option>
                  <option value="walking">Just Walking</option>
                </select>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="form-group">
          <motion.div
            className="form-label custom-font"
            onClick={() => setIsCommentsOpen(!isCommentsOpen)}
            initial={false}
            animate={{ backgroundColor: isCommentsOpen ? '#fff' : '#000', color: isCommentsOpen ? '#000' : '#fff' }}
          >
            Comments or Special Considerations
          </motion.div>
          <AnimatePresence>
            {isCommentsOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <textarea
                  id="comments"
                  value={comments}
                  onChange={handleCommentsChange}
                  placeholder="YOU NEED TO GET A LIFE BRO!"
                  className="custom-font"
                ></textarea>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <button type="submit" className="custom-font" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      
    <BackButton />
    </motion.div>
  );
};

export default ThankYouPage;