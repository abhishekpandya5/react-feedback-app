import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { NavLink, useParams } from 'react-router-dom';

function AboutIconLink() {
	return (
		<div className="about-link">
			<Link to="/about">
				<FaQuestion size={30} />
			</Link>

			{/* <Link
				to={{
					pathname: '/about',
					search: '?sort=name',
					hash: '#something'
				}}
			>
				<FaQuestion size={30} />
			</Link> */}

			{/* <NavLink to="/about" activeClassName="active">About</NavLink> */}

			{/* 
        useParams,useNavigate hooks in react-router dom
        Navigate in react-router dom

        <Route path="/post/:id" element={Post} />
        const params = useParams();
        <h1>{params.id}</h1>

        if(status === 4040) {
          return <Navigate to='/notfound' />
        }

        const onClick = () => {
          console.log('hello');
          navigate('/about);
        }
      */}
		</div>
	);
}

export default AboutIconLink;
