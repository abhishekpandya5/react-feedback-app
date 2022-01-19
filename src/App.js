import { useState } from 'react';
import Header from './components/Header';
import FeedbackData from './components/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';

function App() {
	const [feedback, setFeedback] = useState(FeedbackData);

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete!')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	return (
		<>
			<Header />
			<div className="container">
				<FeedbackStats feedback={feedback} />
				<FeedbackList feedback={feedback} handleClick={deleteFeedback} />
			</div>
		</>
	);
}

export default App;
