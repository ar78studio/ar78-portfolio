import React from 'react';
import { useState } from 'react';
import '../../index.css';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';
import { ReactComponent as OpenTabIcon } from '../../assets/arrowOpenWindow.svg';
import { GiClick } from 'react-icons/Gi';
import { closeIcon } from '../../assets/index.js';
import { invoiceImg } from '../../assets';
import { Fade } from 'react-awesome-reveal';

const Invoice = () => {
	const [toggleInvoice, setToggleInvoice] = useState(false);

	return (
		<>
			<Fade>
				{/* Start Invoice */}
				<div className='flex flex-row'>
					<h4 className='font-roboto text-sunsetOrange font-medium text-2xl mr-3'>|</h4>
					<h4 className='font-roboto text-blueDianne font-medium text-lg'>Custom Invoice Creator</h4>
				</div>

				{/* Start Github and Open-Tab Icons */}
				<div className='flex justify-end'>
					<a href='https://github.com/ar78studio/invoice-creator' target='_blank' alt='GitHub - AR78.studio'>
						<div>
							<GithubIcon className={`svgBlue stroke-one-point-five svgToOrange mr-6 hover:-translate-y-1  transition duration-300`} />
						</div>
					</a>

					<div>
						<a href='https://invoice.ar78.studio/' target='_blank'>
							<OpenTabIcon className='svgBlue svgToOrange hover:-translate-y-1  transition duration-300' />
						</a>
					</div>
				</div>
				{/* Stop Github and Open-Tab Icons */}

				{/* Start Invoice Description on:hover window */}
				{/* <img
              src={invoiceImg}
              alt='Custom Invoice Generator'
              className=' mt-4 sm:mt-8 object-cover max-w-full sm:max-w-lg shadow-xl rounded-md cursor-pointer'
            /> */}

				{/* Start Invoice Description on:click window */}
				<div className='relative'>
					<div>
						<GiClick color='#f4f1de' className={`absolute top-10 sm:top-14 right-5 svgGreen h-[1.4rem] w-[1.4rem] sm:h-[2.5rem] sm:w-[2.5rem] animate-pulse z-[80]`} />
					</div>
					{/* Toggles the Close button for the hidden description window   */}
					<div
						className={`${toggleInvoice ? 'border-box fadeIn' : 'fadeOut'} 
              absolute h-fit w-fit border-box projectBgWhite m-[2rem] mt-[2rem] sm:mt-[4rem] p-2 sm:p-4 rounded-md z-[99]`}
					>
						<div className='flex flex-1 justify-between items-center right-6 z-[200] '>
							<h4 className=' ml-5 text-[0.7rem] sm:text-md font-medium font-roboto text-blueDianne'>Invoice Creator</h4>
							<img
								className={`w-[20px] h-[20px] ml-3 mt-0 sm:w-[30px] sm:h-[30px] object-contain cursor-pointer stroke-one-point-five`}
								src={closeIcon}
								alt='Close Description'
								onClick={() => setToggleInvoice((prev) => !prev)}
							/>
						</div>
						<p className='px-5 pt-0 text-[0.6rem] sm:text-sm font-base font-roboto text-blueDianne'>
							This app allows you to create an invoice and email it to a client. It uses local-storage methods to keep the data you have entered until cleared the form. Built with
							HTML, CSS and JavaScript
							<a href='https://invoice.ar78.studio/' target='_blank'>
								<OpenTabIcon className='svgBlue svgToOrange hover:-translate-y-1  transition duration-300 mt-2' />
							</a>
						</p>
					</div>
					<img
						src={invoiceImg}
						onClick={() => setToggleInvoice((prev) => !prev)}
						// src={invoiceImg}
						alt='Invoice Creator'
						className='mt-4 sm:mt-8 object-cover max-w-full sm:max-w-lg shadow-xl rounded-md cursor-pointer hover:scale-[1.01] transition duration-500'
					/>
				</div>
				{/* Stop Invoice Description on:click window */}

				<div className={`my-8 flex flex-col`}>
					<span className={`font-roboto text-blueDianne text-sm`}>HTML, CSS, JavaScript</span>
				</div>
				{/* End Invoice */}
			</Fade>
		</>
	);
};

export default Invoice;
