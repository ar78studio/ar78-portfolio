import React from 'react';
import { useState } from 'react';
import '../../index.css';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';
import { ReactComponent as OpenTabIcon } from '../../assets/arrowOpenWindow.svg';
import { GiClick } from 'react-icons/Gi';
import { closeIcon } from '../../assets/index.js';
import { pomodorImg } from '../../assets';
import { Fade } from 'react-awesome-reveal';

const Pomodoro = () => {
	const [togglePomodoro, setTogglePomodoro] = useState(false);

	return (
		<>
			<Fade>
				<div className='flex flex-row'>
					<h4 className='font-roboto text-sunsetOrange font-medium text-lg mr-3'>|</h4>
					<h4 className='font-roboto text-blueDianne font-medium text-lg'>Pomodoro Timer</h4>
				</div>

				<div className='flex justify-end'>
					<a href='https://github.com/ar78studio/Pomodoro-Productivity-App' target='_blank' alt='GitHub - AR78.studio'>
						<div>
							<GithubIcon className={`svgBlue svgToOrange mr-6 hover:-translate-y-1 transition duration-300`} />
						</div>
					</a>

					<div>
						<a href='https://ar78studio.github.io/Pomodoro-Productivity-App/' target='_blank'>
							<OpenTabIcon className='svgBlue svgToOrange hover:-translate-y-1  transition duration-300' />
						</a>
					</div>
				</div>

				<div className='relative'>
					<div>
						<GiClick color='#A3CCAB' className={`absolute top-10 sm:top-14 right-5 svgGreen h-[1.4rem] w-[1.4rem] sm:h-[2.5rem] sm:w-[2.5rem] animate-pulse z-[80]`} />
					</div>

					<div
						className={`${togglePomodoro ? 'border-box fadeIn' : 'fadeOut'} }
    absolute h-fit w-fit border-box projectBgWhite m-[2rem] mt-[2rem] sm:mt-[4rem] p-2 sm:p-4 rounded-md z-[99]`}
					>
						<div className='flex flex-1 justify-between items-center right-6 z-[200] '>
							<h4 className=' ml-5 text-[0.7rem] sm:text-md font-medium font-roboto text-blueDianne'>Pomodoro Timer</h4>
							<img
								className={`w-[20px] h-[20px] ml-3 mt-0 sm:w-[30px] sm:h-[30px] object-contain cursor-pointer stroke-one-point-five`}
								src={closeIcon}
								alt='Close Description'
								onClick={() => setTogglePomodoro((prev) => !prev)}
							/>
						</div>
						<p className='px-5 pt-0 text-[0.6rem] sm:text-sm font-base font-roboto text-blueDianne'>
							This app is an advanced Front End Mentor challenge, which I took on to test my ability to work with "advanced" projects as a beginner developer. The user is able to
							set a Pomodoro timer and short & long break timers. Customize how long each timer runs for. See a circular progress bar that updates every minute. Customize the
							appearance of the app with the ability to set preferences for colors and fonts.
						</p>
						<p className='px-5 text-[0.6rem] sm:text-sm font-base font-roboto text-blueDianne'>
							Besides finding this app useful in staying productive and not burning out, as it is easy to get in the creative zone and forget about the needs of the body while
							coding, I have also come to the conclusion that "advanced" is only a name of the mountain until one begins to climb it.
						</p>
					</div>
					<img
						src={pomodorImg}
						onClick={() => setTogglePomodoro((prev) => !prev)}
						alt='Pomodoro Productivity Timer'
						className='mt-4 sm:mt-8 object-cover max-w-full sm:max-w-lg shadow-xl rounded-md cursor-pointer hover:scale-[1.01] transition duration-500'
					/>
				</div>

				<div className={`my-8 flex flex-col`}>
					<span className={`font-roboto text-blueDianne font-base text-sm`}>HTML, CSS, JavaScript</span>
				</div>
			</Fade>
		</>
	);
};

export default Pomodoro;
