import React from 'react';
import '../index.css';
import { ReactComponent as GithubIcon } from '../assets/github.svg';
import { ReactComponent as TwitterIcon } from '../assets/twitter.svg';
import { ReactComponent as LinkedInIcon } from '../assets/linkedin.svg';
// import { CiLinkedin } from "react-icons/ci";

const About = () => (
	<section id='about' className={`flex m-auto xl:max-w-[1280px] relative w-full lg:w-10/12 px-[10%] sm:mt-[6rem] md:mt-[6rem] lg:mt-[7rem] my-20`}>
		<div
			className='font-roboto text-springGreen font-base text-[1rem] justify-center
     '
		>
			<div className='flex flex-row'>
				<h3 className='text-3xl font-normal text-sunsetOrange'>//</h3>
				<h3 className='text-3xl font-normal ml-3 mb-6'> About Me</h3>
			</div>

			<div>
				<p>Hi there! I'm Artem of the family Repin, it is great to meet you!</p>
				<p>
					<mark className='markOrange italic'>
						At this stage in my career I am looking to share my passion in Front End Development and UX/UI design and thus welcome an opportunity to contribute to some seriously
						cool projects in a remote team setting.
					</mark>{' '}
				</p>
				<p>I am based in Europe. If you would like to chat about collaboration on a project, please don't hesitate and reach out. </p>
				<p>
					The very recent project I've worked on was for a telecom company - conXhub. The result was a migration of one of the many Wordpress websites to the React ecosystem and
					implementation of communication between the front-end and back-end server to verify a client's mobile phone number to then let them choose and sign-up for the
					international telephony services the company provides. As well as designing and implementing a custom Stripe checkout integration.{' '}
				</p>
				<p>
					Before working at conXhub, I was enrolled in a year long Front-End Career Development Path at Scrimba.com and prior to that I have held an
					<a target={'_blank'} href='https://www.ultrait.net/'>
						{' '}
						<span className='hoverGreen markOrange underline'>internship at a small CRM software development agency,</span>
					</a>{' '}
					where I worked with Front End Technologies like JavaSript, and prototyped design in AdobeXD and Photoshop. Additionally, I have built{' '}
					<a href='#projects'>
						<span className='hoverGreen markOrange underline'>several projects on my own.</span>
					</a>{' '}
					I as well continue expending my skills daily by studying and working on Front End Projects.
				</p>
				<p>
					My creative background and career have influenced my passion for Web Design and Front End Development, I am also fascinated with decentralisation and responsible
					autonomy, thus Blockchain and Crypto is the field that I am very much interested in.
				</p>

				<p>
					I grew up in Ukraine in a creative family of an artist father, grandfater and an engineer mother, who instilled in me a keen eye for detail and ability to bring ideas to
					fruition, as well as hunger for knowledge.
				</p>
				<p>
					When my family moved me to USA in 1995 at the age of 18, I began learning and playing with Web Design and Development, 3D Modeling Software as well as Audio Software. At
					the same time, I was exploring my creative nature which led me to a professional career crafting functional art and furniture and experience in managing and overseeing
					creative talent which also prepared me to be a <mark className='markOrange'>valuable asset to any team.</mark>
				</p>

				<p>Some of the technologies and software I've worked with:</p>
			</div>

			<div className='text-sunsetOrange flex flex-col sm:flex-row md:flex-row lg:flex-row mt-10 mb-10 justify-around'>
				<ul className='flex flex-col '>
					<li>+ React.js</li>
					<li>+ Next.js</li>
					<li>+ JavaScript (ES6+)</li>
					<li>+ Tailwind CSS</li>
					<li>+ Styled Components</li>
					<li>+ Node, Express</li>
					<li>+ GraphQL</li>
					<li>+ Git, NPM</li>
					<li>+ Wordpress</li>
				</ul>

				<ul className='flex flex-col'>
					<li>+ Figma, Adobe XD</li>
					<li>+ Photoshop, Illustrator</li>
					<li>+ 3D Studio MAX, Blender</li>
					<li>+ Sketchup</li>
					<li>+ Final Cut Pro</li>
					<li>+ Ableton Live</li>
				</ul>
			</div>

			{/* Start Line Separator Bottom for smaller devices */}
			<div className='m-auto lg:mt-[3rem] border-b-[1px] w-[18rem] sm:w-[25rem] md:w-[35rem] lg:w-[45rem] lg:border-b-[1px] md:border-b-[1px] sm:border-b-[1px]  border-springGreen mb-8'></div>

			{/* Start Github and Twitter Icons */}
			<div className={`flex flex-wrap justify-center mb-10`}>
				<div className='flex flex-row sm:place-self-center '>
					<a target={'_blank'} href='https://github.com/ar78studio' alt='GitHub - AR78.studio'>
						<div>
							<GithubIcon size={32} className={`svgGreen svgToOrange mr-10 hover:-translate-y-1  transition duration-300 lg:w-8 lg:h-8 w-6 h-6`} />
						</div>
					</a>

					<a target={'_blank'} href='https://twitter.com/GeochiNova' alt='Twiter - Artem: of the family Repin-Muhin'>
						<div>
							<TwitterIcon size={32} className={`svgGreen svgToOrange mr-10 hover:-translate-y-1  transition duration-300 lg:w-8 lg:h-8 w-6 h-6`} />
						</div>
					</a>

					<a target={'_blank'} href='https://www.linkedin.com/in/artem-r-803310262/'>
						<LinkedInIcon size={32} className={`svgGreen svgToOrange hover:-translate-y-1  transition duration-300 lg:w-8 lg:h-8 w-6 h-6`} />
					</a>
				</div>
			</div>

			{/* Stop Github and Twitter Icons */}
		</div>

		{/* To absolutely position the #1 I set the section class above to relative */}
		<div>
			<h1 className={`text-blueDianne absolute tracking-wider text-4xl top-[103.7%] left-[76%] sm:top-[105.5%] sm:left-[75%] sm:text-7xl`}>{'#2'}</h1>

			<h1 className={`text-springGreen absolute tracking-wider text-4xl top-[103.6%] left-[75.5%] sm:top-[105%] sm:left-[74.7%] sm:text-7xl`}>{'#2'}</h1>
		</div>
	</section>
);

export default About;
