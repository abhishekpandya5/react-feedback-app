import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

function AboutPage() {
	return (
		<Card>
			<div className="about">
				<h1>About This project</h1>
				<p>React app having CRUD operations</p>
				<p>
					<Link to="/">Home</Link>
				</p>
			</div>
		</Card>
	);
}

export default AboutPage;
