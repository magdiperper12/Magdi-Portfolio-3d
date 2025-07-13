import Project from './projects';

const Project1 = () => {
	return (
		<div>
			<Project
				name={'botbat'}
				desc={
					'"botbat" is a lightweight AI-powered chatbot web app built using modern web technologies. It features real-time conversation handling, a clean UI, and responsive design. The project showcases how to integrate chatbot logic into a simple and effective frontend experience.'
				}
				image='/botbat.PNG'
				live={'https://bat-chat.surge.sh/'}
				github={'https://github.com/magdiperper12/botbat'}
			/>
		</div>
	);
};

export default Project1;
