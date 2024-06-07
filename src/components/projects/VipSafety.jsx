import React from 'react';
import { useState } from 'react';
import '../../index.css';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';
import { ReactComponent as OpenTabIcon } from '../../assets/arrowOpenWindow.svg';
import { GiClick } from 'react-icons/Gi';
import { closeIcon } from '../../assets/index.js';
import { VipSafetyImg } from '../../assets/index.js';
import { Fade } from 'react-awesome-reveal';

const VipSafety = () => {
	const [ToggleVipSafety, setToggleVipSafety] = useState(false);

	return (
		<>
			<Fade>
				<div className='flex flex-row'>
					<h4 className='font-roboto text-sunsetOrange font-medium text-lg mr-3'>|</h4>
					<h4 className='font-roboto text-blueDianne font-medium text-lg'>Telecom</h4>
				</div>

				<div className='flex justify-end'>
					<a href='https://github.com/ar78studio/react-strapi-stripe' target='_blank' alt='GitHub - AR78.studio'>
						<div>
							<GithubIcon className={`svgBlue svgToOrange mr-6 hover:-translate-y-1 transition duration-300`} />
						</div>
					</a>

					{/* <div>
						<a href='https://pomodoro.ar78.studio/' target='_blank'>
							<OpenTabIcon className='svgBlue svgToOrange hover:-translate-y-1  transition duration-300' />
						</a>
					</div> */}
				</div>

				<div className='relative'>
					<div>
						<GiClick color='rgba(254, 95, 85, 1)' className={`absolute top-10 sm:top-14 right-5 svgGreen h-[1.4rem] w-[1.4rem] sm:h-[2.5rem] sm:w-[2.5rem] animate-pulse z-[80]`} />
					</div>

					<div
						className={`${ToggleVipSafety ? 'border-box fadeIn' : 'fadeOut'} }
    absolute h-fit w-fit border-box projectBgWhite m-[2rem] mt-[2rem] sm:mt-[4rem] p-2 sm:p-4 rounded-md z-[99]`}
					>
						<div className='flex flex-1 justify-between items-center right-6 z-[200] '>
							<h4 className=' ml-5 text-[0.7rem] sm:text-md font-medium font-roboto text-blueDianne'>Telecom</h4>
							<img
								className={`w-[20px] h-[20px] ml-3 mt-0 sm:w-[30px] sm:h-[30px] object-contain cursor-pointer stroke-one-point-five`}
								src={closeIcon}
								alt='Close Description'
								onClick={() => setToggleVipSafety((prev) => !prev)}
							/>
						</div>
						<p className='px-5 pt-0 text-[0.6rem] sm:text-sm font-base font-roboto text-blueDianne'>
							The project was to migrate the site from Wordpress to the React ecosystem. And to implement communication between Front-End and Backend in order for the clients to be
							able to verify their mobile phone number and then to sign-up for a telephony plan the company offered. Custom Checkout was implemented via the Stripe API. Strapi
							headless CMS was used to accomodate the Blog.{' '}
						</p>
						<p className='px-5 text-[0.6rem] sm:text-sm font-base font-roboto text-blueDianne'>
							Technologiese used:
							<ul>
								<li>- React.js</li>
								<li>- Tailwind CSS</li>
								<li>- GraphQl + Apollo</li>
								<li>- Framer Motion</li>
								<li>- Formik and Yup</li>
								<li>- i18next</li>
								<li>- Stripe API</li>
								<li>- Strapi CMS</li>
								<li>
									<div className='mt-2'>
										<a href='https://github.com/ar78studio/react-strapi-stripe' target='_blank' alt='GitHub - AR78.studio'>
											<GithubIcon className={`svgBlue svgToOrange mr-6 hover:-translate-y-1 transition duration-300`} />
										</a>
									</div>
								</li>
							</ul>
						</p>
					</div>
					<img
						src={VipSafetyImg}
						onClick={() => setToggleVipSafety((prev) => !prev)}
						alt='Pomodoro Productivity Timer'
						className='mt-4 sm:mt-8 object-cover max-w-full sm:max-w-lg shadow-xl rounded-md cursor-pointer hover:scale-[1.01] transition duration-500'
					/>
				</div>

				<div className={`my-8 flex flex-col`}>
					<span className={`font-roboto text-blueDianne font-base text-sm`}>Tailwind CSS, React.js, Stripe API, GraphQL </span>
				</div>
			</Fade>
		</>
	);
};

export default VipSafety;
