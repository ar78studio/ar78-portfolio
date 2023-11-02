import React from 'react';
import { useState } from 'react';
import '../../index.css';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';
import { ReactComponent as OpenTabIcon } from '../../assets/arrowOpenWindow.svg';
import { GiClick } from 'react-icons/Gi';
import { passwordImg } from '../../assets';
import { closeIcon } from '../../assets/index.js';
import { Fade } from 'react-awesome-reveal';

const Password = () => {
	const [togglePassword, setTogglePassword] = useState(false);

	return (
		<>
			<Fade>
				{/* Start Password Generator */}
				<div className='flex flex-row'>
					<h4 className='font-roboto text-sunsetOrange font-medium text-2xl mr-3'>|</h4>
					<h4 className='font-roboto text-blueDianne font-medium text-lg'>Password Generator</h4>
				</div>

				{/* Start Github and Open-Tab Icons */}
				<div className='flex justify-end'>
					<a href='https://github.com/ar78studio/PasswordGen' target='_blank' alt='Password Generator - GitHub - AR78.studio'>
						<div>
							<GithubIcon className={`svgBlue stroke-one-point-five svgToOrange mr-6 hover:-translate-y-1  transition duration-300`} />
						</div>
					</a>

					<div>
						<a href='https://password.ar78.studio/' target='_blank'>
							<OpenTabIcon className='svgBlue svgToOrange hover:-translate-y-1  transition duration-300' />
						</a>
					</div>
				</div>
				{/* Stop Github and Open-Tab Icons */}

				{/* Start Password Description on:click window */}
				<div className='relative'>
					<div>
						<GiClick color='#f4f1de' className={`absolute top-10 sm:top-14 right-5 svgGreen h-[1.4rem] w-[1.4rem] sm:h-[2.5rem] sm:w-[2.5rem] animate-pulse z-[80]`} />
					</div>
					{/* Toggles the Close button for the hidden description window   */}
					<div
						className={`${togglePassword ? 'border-box fadeIn' : 'fadeOut'} 
              absolute h-fit w-fit border-box projectBgWhite m-[2rem] mt-[2rem] sm:mt-[4rem] p-2 sm:p-4 rounded-md z-[99]`}
					>
						<div className='flex flex-1 justify-between items-center right-6 z-[200] '>
							<h4 className=' ml-5 text-[0.7rem] sm:text-md font-medium font-roboto text-blueDianne'>Password Generator</h4>
							<img
								className={`w-[20px] h-[20px] ml-3 mt-0 sm:w-[30px] sm:h-[30px] object-contain cursor-pointer stroke-one-point-five`}
								src={closeIcon}
								alt='Close Description'
								onClick={() => setTogglePassword((prev) => !prev)}
							/>
						</div>
						<p className='px-5 pt-0 text-[0.6rem] sm:text-sm font-base font-roboto text-blueDianne'>
							This one is a simple project to generate a number of random passwords and automatically saving one as a text file into your downloads folder after clicking on the
							chosen password button.
							<a href='https://password.ar78.studio/' target='_blank'>
								<OpenTabIcon className='svgBlue svgToOrange hover:-translate-y-1  transition duration-300 mt-2' />
							</a>
						</p>
					</div>
					<img
						src={passwordImg}
						onClick={() => setTogglePassword((prev) => !prev)}
						// src={invoiceImg}
						alt='Pomodoro Productivity Timer'
						className='mt-4 sm:mt-8 object-cover max-w-full sm:max-w-lg shadow-xl rounded-md cursor-pointer hover:scale-[1.01] transition duration-500'
					/>
				</div>
				{/* Stop Password Description on:click window */}

				<div className={`my-8 flex flex-col`}>
					<span className={`font-roboto text-blueDianne text-sm`}>HTML, CSS, JavaScript</span>
				</div>
				{/* End Password Generator */}
			</Fade>
		</>
	);
};

export default Password;
