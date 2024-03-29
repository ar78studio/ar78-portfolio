import React from 'react';

const Contact = () => {
	function Mailto({ email, subject, body, ...props }) {
		return <a href={`mailto:${email}?subject=${subject || ''}&body=${body || ''}`}>{props.children}</a>;
	}

	return (
		<section id='contact' className='flex flex-col max-w-[800px] m-auto justify-center relative w-full my-[7rem] sm:mt-[6rem] md:mt-[6rem] lg:mt-[7rem] '>
			{/* To absolutely position the #1 I set the section class above to relative */}
			<div>
				<h1 className={`text-lightBeige absolute tracking-wider text-4xl top-[-30%] left-[80%] sm:top-[-33%] sm:left-[80.3%] lg:top-[-37%] sm:text-7xl z-50`}>{'#4'}</h1>

				<h1 className={`text-blueDianne absolute tracking-wider text-4xl top-[-30.4%] left-[79.8%] sm:top-[-33.5%] sm:left-[80%] lg:top-[-37.5%] sm:text-7xl z-50`}>{'#4'}</h1>
			</div>
			<div className='flex justify-center sm:justify-left md:justify-left lg:justify-left flex-row font-roboto text-springGreen font-base text-[1rem]'>
				<h3 className='text-3xl font-normal text-sunsetOrange'>//</h3>
				<h3 className='text-3xl font-normal ml-3 text-springGreen'> Contact</h3>
			</div>

			<h5 className='text-springGreen mt-14 place-self-center text-5xl'>Get In Touch</h5>

			<h5 className='flex flex-col text-springGreen p-10 max-w-[600px] min-w-[140px] font-sm place-self-center text-center'>
				As a Front End Eveloper, UX/UI Designer, I am currently seeking new opportunities to contribute and grow as a part of remote tech team. I especially would love to work on a
				Blockchain/Crypto project as I find the field of decentralization particularly important in our times. If you have a project you feel I could contribute to, please don't
				hesitate to reach out and I will promptly respond back!
			</h5>

			<button className='text-blueDianne font-bold place-self-center mt-10  bg-sunsetOrange rounded-md h-10 w-32 hover:bg-springGreen hover:text-sunsetOrange drop-shadow-xl cursor-pointer'>
				<Mailto email='info@ar78.studio' subject='Hello' body='Hi Artem!'>
					Email
				</Mailto>
			</button>
		</section>
	);
};

export default Contact;
