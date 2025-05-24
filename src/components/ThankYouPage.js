import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ThankYouPage.css';
import BackButton from './BackButton';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
  const navigate = useNavigate();
  
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [comments, setComments] = useState('');
  const [isDateTimeOpen, setIsDateTimeOpen] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const handleDateTimeChange = (date) => {
    setSelectedDateTime(date);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      date: selectedDateTime.toLocaleDateString(),
      time: selectedDateTime.toLocaleTimeString(),
      comments: comments,
    };
  
    const emailBody = `
      Date: ${formData.date}
      Time: ${formData.time}
      Comments: ${formData.comments}
    `;
    const mailtoURL = `mailto:soroush.h.dev@gmail.com?subject=Date%20Confirmation&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoURL;

    setSelectedDateTime(new Date());
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
      <p className="message">so my assistant can arrange the limousine</p>
      <form className="date-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <motion.div
            className="form-label custom-font"
            onClick={() => setIsDateTimeOpen(!isDateTimeOpen)}
            initial={false}
            animate={{ backgroundColor: isDateTimeOpen ? '#fff' : '#000', color: isDateTimeOpen ? '#000' : '#fff' }}
          >
            Select Date & Time
          </motion.div>
          <AnimatePresence>
            {isDateTimeOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="date-picker-container"
              >
                <DatePicker
                  selected={selectedDateTime}
                  onChange={handleDateTimeChange}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className="custom-font date-picker-input"
                  calendarClassName="custom-calendar"
                  inline
                />
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
                className="textarea-container"
              >
                <textarea
                  id="comments"
                  value={comments}
                  onChange={handleCommentsChange}
                  placeholder="You need to get a life bro"
                  className="custom-font glassy-textarea"
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