import Project from './projects';

const Project10 = () => {
	return (
		<div>
			<Project
				name={'Token Courses'}
				desc={
					'"Token Courses" is an educational platform designed to offer curated video courses in a user-friendly and responsive interface. It features categorized content, sleek design, and easy navigation to enhance the learning experience. Ideal for learners looking for structured and accessible online education.'
				}
				image='/course.PNG'
				live={'https://bat-chat.surge.sh/'}
				github={'/'}
			/>
		</div>
	);
};

export default Project10;
