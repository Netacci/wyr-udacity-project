import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import Question from './Question';
import NavComp from './Nav';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function HomePage(props) {
	return (
		<>
			<NavComp />
			<Container>
				<Tabs
					defaultActiveKey='unanswered'
					className='text-center justify-content-center'
				>
					<Tab eventKey='unanswered' title='Unanswered Questions'>
						<div className='mt-3'>
							{props.questionsID.map((id) => (
								<Question key={id} id={id}></Question>
							))}
						</div>
					</Tab>
					<Tab eventKey='answered' title='Answered Questions'>
						<div className='mt-3'>
							{props.questionsID.map((id) => (
								<Question key={id} id={id}></Question>
							))}
						</div>
					</Tab>
				</Tabs>
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
