import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
	const { feedback } = useContext(FeedbackContext);
	//calculate average rating
	let average =
		feedback.reduce((acc, curr) => {
			return acc + curr.rating;
		}, 0) / feedback.length;

	average = average.toFixed(1).replace(/[.]0$/, '');

	return (
		<div className="feedback-stats">
			<h4>{`${feedback.length} Review${feedback.length !== 1 ? 's' : ''}`}</h4>
			<h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
		</div>
	);
}

// As now feedback is coming from context, so propTypes is not required
// FeedbackStats.propTypes = {
// 	feedback: PropTypes.array.isRequired
// };

export default FeedbackStats;
