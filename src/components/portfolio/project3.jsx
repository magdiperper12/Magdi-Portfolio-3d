import Project from './projects';

const Project3 = () => {
	return (
		<div>
			<Project
				name={'Social Media'}
				desc={
					'This is a fully functional social media web application built with Next.js, Tailwind CSS, and TypeScript. It includes all core features such as user posts, comments, likes, following system, notifications, and stories — delivering a modern and interactive social experience.'
				}
				image='/social.PNG'
				live={'https://social-midea.vercel.app/'}
				github={'https://github.com/magdiperper12/SocialMidea'}
			/>
		</div>
	);
};

export default Project3;
