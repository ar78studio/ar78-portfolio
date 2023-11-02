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
				<AccordionItem className=' font-light leading-4 text-xs lg:text-base ' header={'Milne at Home // March 2014 - July 2017 // Kingston, NY USA'}>
					<p>▹ Designed and built from concept to a finished product Custom Furniture. Restored antique pieces of furniture</p>
					<p>▹ Brought the company's manufacturing and quality control standards to new levels which attracted high paying clients</p>
					<p>
						▹ Managed the workshop, and inspired a well-functioning team while nurturing team-member strengths and their creativity and growth in production of Custom Furniture
						using various materials and techniques
					</p>
					<p>▹ Met with clients, discussed concepts and ideas and offered creative input and solutions</p>
				</AccordionItem>
				<AccordionItem className=' font-light leading-4 text-xs lg:text-base ' header={'Owner @ ChantingTree.com // 2008 - 2017 // Pennsylvania, USA '}>
					<p>▹ Designed, built and distributed Native American Flutes</p>
					<p>▹ Managed product sales via the WordPress website</p>
					<p>▹ Self-produced and recorded CD’s and lead group sound meditations</p>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default ItExperience;
