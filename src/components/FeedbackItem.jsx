import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card';

function FeedbackItem({ item: { rating, text, id }, handleClick }) {
	// console.log(props);
	// const [rating, setRating] = useState(7);
	// const [text, setText] = useState('test feedback item');

	// const handleClick = () => {
	// 	setRating((prev) => {
	// 		console.log(prev);
	// 		if (prev > 1) return prev - 1
	//     else return 0
	// 	});
	// };

	return (
		<Card>
			<div className="num-display">{rating}</div>
			<button onClick={() => handleClick(id)} className="close">
				<FaTimes color="purple" />
			</button>
			<div className="text-display">{text}</div>
		</Card>
	);
}

FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired
};

export default FeedbackItem;
