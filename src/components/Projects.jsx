import React from 'react';
import '../index.css';
import Pomodoro from './projects/Pomodoro';
import Invoice from './projects/Invoice';
import Password from './projects/Password';
import LuxAcres from './projects/LuxAcres';
import VipSafety from './projects/VipSafety';

const Projects = () => {
	return (
		<section id='projects' className={`flex m-auto xl:max-w-[1280px] flex-col relative my-[6rem]`}>
			{/* Start Projects Header H3 */}
			<div className='flex flex-row ml-[2.5rem] sm:ml-[7.4rem] font-roboto text-springGreen font-base text-[1rem]'>
				<h3 className='text-3xl font-normal text-sunsetOrange'>//</h3>
				<h3 className='text-3xl font-normal ml-3 text-blueDianne'> Projects</h3>
			</div>
			{/* End Projects Header H3 */}

			<section className={`flex lg:flex-row flex-col m-auto`}>
				<div id='projectsWrap_01' className={`flex flex-col mt-8 sm:flex-col sm:m-auto px-10`}>
					{/* Start VipSafety Wrap  */}
					<div className={`flex flex-col sm:mt-[2rem] md:mt-[2rem] lg:mt-[3rem]`}>
						<VipSafety />
					</div>
					{/* End VipSafety Wrap  */}

					{/* Start Project #1 Wrap  */}
					<div className={`flex flex-col sm:mt-[2rem] md:mt-[2rem] lg:mt-[3rem]`}>
						<Pomodoro />
					</div>
					{/* End Project #1 Wrap  */}

					{/* Start Project #2 Wrap  */}
					<div className={`flex flex-col sm:mt-[2rem] md:mt-[2rem] lg:mt-[3rem]`}>
						<Invoice />
					</div>
					{/* End Project #2 Wrap  */}
				</div>

				<section id='flexSection02-Wrap' className={`flex flex-col sm:flex-col px-10`}>
					{/* Start Project #4 Wrap */}
					<div className={`flex flex-col sm:mt-[2rem] md:mt-[2rem] lg:mt-[3rem]`}>
						<LuxAcres />
					</div>
					{/* End Project #4 Wrap */}

					{/* Start Password Wrap  */}
					<div className={`flex flex-col sm:mt-[2rem] md:mt-[2rem] lg:mt-[3rem]`}>
						<Password />
					</div>
					{/* End Password Wrap  */}
				</section>
			</section>
			{/* To absolutely position the #1 I set the section class above to relative */}
			<div>
				<h1 className={`text-springGreen absolute tracking-wider text-4xl top-[103.3%] left-[15%] sm:top-[101.6%] sm:left-[15%] lg:top-[102.7%] sm:text-7xl`}>{'#3'}</h1>

				<h1 className={`text-lightBeige absolute tracking-wider text-4xl top-[103.2%] left-[14.5%] sm:top-[101.5%] sm:left-[14.7%] lg:top-[102.5%] sm:text-7xl`}>{'#3'}</h1>
			</div>
		</section>
	);
};

export default Projects;
