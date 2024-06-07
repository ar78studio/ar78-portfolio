import React from 'react';
import '../index.css';
import AccordionFolder from './AccordionFolder';
import ItExperience from './accordion/ItExperience';
import OtherExperience from './accordion/OtherExperience';
import { ReactComponent as LinkedInIcon } from '../assets/linkedin.svg';

const Experience = () => {
	return (
		<section id='experience' className='flex flex-col m-auto place-items-center xl:max-w-[1280px] relative w-full lg:w-10/12 sm:mt-[6rem] md:mt-[6rem] lg:mt-[7rem] my-20'>
			{/* <div className='flex justify-center sm:justify-left md:justify-left lg:justify-left flex-row font-roboto text-springGreen font-base text-[1rem]'>
				<h3 className='text-3xl font-normal text-sunsetOrange'>//</h3>
				<h3 className='text-3xl font-normal ml-3 text-blueDianne'>IT Experience</h3>
			</div> */}

			<div className='flex justify-center sm:justify-left md:justify-left lg:justify-left flex-row font-roboto text-springGreen font-base text-[1rem]'>
				<h3 className='text-3xl font-normal text-sunsetOrange'>//</h3>
				<h3 className='text-3xl font-normal ml-3 text-blueDianne'>IT Experience</h3>
			</div>
			<div>
				<ItExperience />
			</div>
			<div className='flex justify-center sm:justify-left md:justify-left lg:justify-left flex-row font-roboto text-springGreen font-base text-[1rem] mt-10'>
				<h3 className='text-3xl font-normal text-sunsetOrange'>//</h3>
				<h3 className='text-3xl font-normal ml-3 text-blueDianne'>Other Experience</h3>
			</div>
			<div>
				<OtherExperience />
			</div>

			<div className='mt-10'>
				<a target={'_blank'} alt='LinkedIn' href='https://www.linkedin.com/in/artem-r-803310262/'>
					<LinkedInIcon size={32} className={`ml-1 svgBlue svgToOrange hover:-translate-y-1  transition duration-300 lg:w-20 lg:h-20 w-20 h-6  `} />
				</a>
			</div>
		</section>
	);
};

export default Experience;
