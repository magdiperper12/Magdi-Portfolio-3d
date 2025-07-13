import './project.css';
import { FaEye, FaGithub } from 'react-icons/fa';

const Project = ({ name, desc, image, live, github }) => {
	return (
		<div className='project '>
			<img
				src={image}
				loading='lazy'
			/>
			<div className='desc'>
				<h1>{name}</h1>
				<p>{desc}</p>
				<div className='btn'>
					<a
						className='anchor'
						target='_blank'
						href={live}>
						Live <FaEye />
					</a>
					<a
						className='anchor'
						href={github}
						target='_blank'>
						Github <FaGithub />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Project;
