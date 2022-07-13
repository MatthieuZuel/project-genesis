import React from 'react';
import { Hero, InfoSection, Services } from '../../Components';
import {
	homeObjOne,
	homeObjThree,
	homeObjTwo,
} from '../../Components/InfoSection/Data';
import Image from '../../Images/Genesis.png';

const Home = () => {
	// const [isOpen, setIsOpen] = useState(false)

	// const toggle = () => {
	//     setIsOpen(!isOpen)
	// };

	return (
		<>
			<Hero />
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjTwo} />
			<div className='info'>
				<div className='wrapper'>
					<img
						src={Image}
						alt='Welcome to Genesis Marketing: 1. Headhunter, 2. Marketing Strategy, 3. Social media auditor, 4. Health and safety. Your excellence, our expertise. #thebeginningofyourfuture'
					/>
				</div>
			</div>
			<Services />
			<InfoSection {...homeObjThree} />
		</>
	);
};

export default Home;
