import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const initialState = [
    {
      id: 1,
      text: 'This feedback coming from context',
      rating: 10
    }
  ];
  const [feedback, setFeedback] = useState(initialState);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete!')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };


  return (
    <FeedbackContext.Provider value={{
      feedback: feedback,
      deleteFeedback: deleteFeedback,
      addFeedback: addFeedback
    }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
