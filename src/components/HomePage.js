import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import Question from './Question';
import Card from '@material-ui/core/Card';
import NavComp from './Nav';

function HomePage(props) {
    
	return (
		<>
		<NavComp />
		<Container>
			<div className='mt-3'>
				{props.questionsID.map((id) => (
					<Card key={id} className='mb-5 p-3 text-center w-50 mx-auto '><Question id={id}></Question></Card>
				))}
			</div>
		</Container>
		</>
	);
}
const mapStateToProps = ({ questions }) => {
	return {
		questionsID: Object.keys(questions).sort(
			(a, b) => questions[b].timestamp - questions[a].timestamp
		),
	};
};

export default connect(mapStateToProps)(HomePage);
