import Contact from './components/contact/contact';
import Hero from './components/hero/hero';
import Project1 from './components/portfolio/project1';
import Project10 from './components/portfolio/project10';
import Project11 from './components/portfolio/project11';
import Project2 from './components/portfolio/project2';
import Project3 from './components/portfolio/project3';
import Project4 from './components/portfolio/project4';
import Project5 from './components/portfolio/project5';
import Project7 from './components/portfolio/project7';
import Project8 from './components/portfolio/project8';
import Project9 from './components/portfolio/project9';
import Services from './components/services/services';
import Skills from './components/skills/skills';

const App = () => {
	return (
		<div className='container'>
			<section id='#home'>
				<Hero />
			</section>
			<section id='#services'>
				<Services />
			</section>
			{/*skills */}
			<section>
				<Skills id='#skills' />
			</section>
			{/*project sections */}
			<section id='#Project1'>
				<h1 className='Title'>
					Professional <span>Experiance</span>
				</h1>
			</section>
			<section id='#Project1'>
				<Project1 />
			</section>
			<section id='#Project7'>
				<Project7 />
			</section>{' '}
			<section id='#Project8'>
				<Project8 />
			</section>
			<section id='#Project2'>
				<Project2 />
			</section>
			<section id='#Project10'>
				<Project10 />
			</section>
			<section id='#Project9'>
				<Project9 />
			</section>
			<section id='#Project1'>
				<h1 className='Title'>
					Personal <span>Projects</span>
				</h1>
			</section>
			<section id='#Project3'>
				<Project3 />
			</section>
			<section id='#Project11'>
				<Project11 />
			</section>
			<section id='#Project4'>
				<Project4 />
			</section>
			<section id='#Project5'>
				<Project5 />
			</section>
			<section id='#contact'>
				<Contact />
			</section>
		</div>
	);
};

export default App;
