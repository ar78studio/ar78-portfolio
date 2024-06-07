import React from 'react';
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import styles from '../accordion/styles.module.css';

import { ChevronArrow } from '../../assets/index';

const ItExperience = ({ setSelectedPage }) => {
	const AccordionItem = ({ header, ...rest }) => (
		<Item
			{...rest}
			header={
				<>
					{header}
					<img className={styles.chevron} src={ChevronArrow} alt='Chevron Down' />
				</>
			}
			className={styles.item}
			buttonProps={{
				className: ({ isEnter }) => `bg-sunsetOrange ${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
			}}
			contentProps={{ className: styles.itemContent }}
			panelProps={{ className: styles.itemPanel }}
		/>
	);

	return (
		<div className='flex flex-col mx-4 sm:mx-20 min-w-[400px] lg:min-w-[625px] max-w-[625px] mt-10 drop-shadow-xl'>
			<Accordion transition transitionTimeout={200}>
				<AccordionItem className=' font-light leading-4 text-xs lg:text-base' header={'Lead Frontend Developer - conXhub // Feb 2023 - Aug 2023 // Remote'}>
					<div className='p-6'>
						<strong className='pt-10'>Key Responsibilities:</strong>
						<p>- Spearheaded the transition of existing WordPress site to the React framework, amplifying site performance and user experience.</p>
						<p>- Architecturally designed and implemented a seamless integration with Stripe API, enabling efficient payment processes through a custom checkout interface.</p>
						<p>- Oversaw content management utilizing Strapi's headless CMS, adding blog management capabilities.</p>
						<p>- Ensured meticulous translation of designs into responsive web pages, achieving visual consistency throughout.</p>
						<p>- Executed extensive code testing to guarantee functionality, user satisfaction, and adherence to requirements.</p>
						<p>
							- Fostered synergetic collaborations across departments, particularly with the backend team, establishing and optimizing communication and functionality between the
							Front-End, API End-Points and Database and the overall development workflow.
						</p>
						<p>- Continuously expanded professional knowledge, staying abreast of industry innovations through conferences, blogs, and cutting-edge technologies.</p>
						<p>- Promptly diagnosed and rectified development issues, ensuring smooth project progress.</p>
						<p>- Troubleshot existing WordPress Sites</p>
						<strong className='my-6'>Technical Expertise:</strong>
						<p>Skilled in crafting high-quality code using React.js paired with Tailwind CSS, achieving a blend of aesthetics and functionality.</p>
						<p>Proficient in API integration, employing Node, Express, Axios and GraphQL, optimizing data management with Strapi Headless CMS and Stripe.</p>
						<p>Adherence to premier web development standards and best practices, ensuring product robustness and reliability.</p>
						<strong className='my-4'>Tech-stack and Skills used:</strong>
						<div>
							<ul>
								<li>React.js</li>
								<li>Axios</li>
								<li>Apollo + GraphQL</li>
								<li>Node Js & Express</li>
								<li>Stripe API</li>
								<li>Formik and Yup</li>
								<li>i18next Multilanguage support</li>
								<li>React FramerMotion</li>
								<li>Tailwind CSS</li>
								<li>Strapi CMS</li>
							</ul>
						</div>

						<p className='mt-4'>
							My tenure at Conxhub not only honed my technical proficiencies but also underscored the importance of cross-team collaboration and continuous learning in an
							ever-evolving tech landscape.
						</p>
					</div>
				</AccordionItem>

				<AccordionItem className='  font-light leading-4 text-xs lg:text-base  ' header={'Front End Developer Career Path, Scrimba - Jan 2022 - Feb 2023'}>
					<p>▹ Full-time studies in Front End Development (JavaScript, React, APIs)</p>
				</AccordionItem>
				<AccordionItem className='  font-light leading-4 text-xs lg:text-base  ' header={'Intern - UltraIT.net // March 2020 - April 2020 // Javea, Spain'}>
					<div className='p-6'>
						<p>▹ Communicated with the Lead Developer in editing and modifying existing web pages</p>
						<p>▹ Studied the company’s internal C# code base and .NET environment to transition into development</p>
						<p>▹ Designed and prototyped Real Estate website mock-up from the ground up in Adobe XD and Photoshop using best aesthetics for Layout and Colour Principles</p>
						<p>▹ Translated the design into HTML, CSS and JavaScript to add responsiveness and functionality</p>
					</div>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default ItExperience;
