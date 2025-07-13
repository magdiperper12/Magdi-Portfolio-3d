import Project from './projects';

const Project4 = () => {
	return (
		<div>
			<Project
				name={'E-commerce'}
				desc={
					'This is a full-featured E-commerce website built using Next.js, Tailwind CSS, TypeScript, and REST APIs. The platform includes essential shopping features such as product listings, shopping cart, payment integration, and a responsive user interface designed for a smooth shopping experience.'
				}
				image='/commerce.PNG'
				live={'https://e-commerce-h3ex0he57-magdis-projects.vercel.app/'}
				github={'https://github.com/magdiperper12/E-commerce'}
			/>
		</div>
	);
};

export default Project4;
