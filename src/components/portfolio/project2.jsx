import Project from './projects';

const Project2 = () => {
	return (
		<div>
			<div>
				<Project
					name={'Football-Historic'}
					desc={
						'"Football-Historic" is a rich football platform built using Next.js, TypeScript, Tailwind CSS, and public APIs. It offers historical data about football clubs and players, an AI-powered chat assistant, a dedicated fan zone, and an integrated shopping section — delivering a complete and interactive football experience.'
					}
					image='/historic.PNG'
					live={'https://historic.vercel.app/'}
					github={'https://github.com/magdiperper12/HistoricFootball'}
				/>
			</div>
		</div>
	);
};

export default Project2;
