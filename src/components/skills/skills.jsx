import './skills.css';
import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaBootstrap,
	FaGithub,
	FaGitAlt,
} from 'react-icons/fa';
import {
	SiTailwindcss,
	SiTypescript,
	SiNextdotjs,
	SiGatsby,
	SiVite,
} from 'react-icons/si';
import { TbDeviceDesktop, TbRotate3D } from 'react-icons/tb';
import { MdAnimation } from 'react-icons/md';

const skills = [
	{
		category: 'Languages',
		items: [
			{ name: 'HTML', icon: <FaHtml5 className='html' /> },
			{ name: 'CSS', icon: <FaCss3 className='css' /> },
			{ name: 'JavaScript', icon: <FaJs className='js' /> },
			{ name: 'TypeScript', icon: <SiTypescript className='ts' /> },
		],
	},
	{
		category: 'Frameworks',
		items: [
			{ name: 'ReactJS', icon: <FaReact className='react' /> },
			{ name: 'NextJS', icon: <SiNextdotjs className='nextjs' /> },
			{ name: 'Gatsby', icon: <SiGatsby className='gatsby' /> },
			{ name: 'TailwindCSS', icon: <SiTailwindcss className='tailwind' /> },
			{ name: 'Bootstrap', icon: <FaBootstrap className='bootstrap' /> },
		],
	},
	{
		category: 'Tools',
		items: [
			{ name: 'Git', icon: <FaGitAlt className='git' /> },
			{ name: 'GitHub', icon: <FaGithub className='github' /> },
			{ name: 'Vite', icon: <SiVite className='vite' /> },
		],
	},
	{
		category: 'Techniques',
		items: [
			{ name: 'Animation', icon: <MdAnimation className='animation' /> },
			{ name: '3D', icon: <TbRotate3D className='threeD' /> },
			{
				name: 'Responsive Design',
				icon: <TbDeviceDesktop className='responsive' />,
			},
		],
	},
];

const Skills = () => {
	return (
		<div className='skills-container'>
			<h1 className='skills-title'>
				My <span>Skills</span>
			</h1>
			<div className='skills-grid'>
				{skills.map((skill) => (
					<div
						key={skill.category}
						className='skill-category'>
						<h2>{skill.category}</h2>
						<div className='skill-list'>
							{skill.items.map((item, index) => (
								<div
									key={index}
									className='skill-box'>
									<div className='icon'>{item.icon}</div>
									<span>{item.name}</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
