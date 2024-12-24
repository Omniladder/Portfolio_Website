import './projects.css';
import WebHeader from '../../components/header/header.js';
import LargeCard from '../../components/largeCard/largeCard.js';

import { register } from 'swiper/element/bundle';


/*import CardContent from '@mui/material/CardContent';*/

import { Swiper, SwiperSlide } from 'swiper/react';
//import 'swiper/swiper.css'; //This line is busted
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCoverflow, Navigation, Pagination } from 'swiper';

import haskell from '../../pics/haskell.jpeg';
import celluar from '../../pics/cells.png';
import wants from '../../pics/clientWants.png';
import testifAi from '../../pics/TestifAi.png';

/*iimport Swiper from 'swiper';
import 'swiper/css';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
mport SwiperCore from 'swiper';*/

function projects() {
	register();
	/*SwiperCore.use([Autoplay]);*/
	return (
		<div className="App">
			<header>
				<div><WebHeader title={"Projects"} quote={"The purpose of life is not to be happy but to be productive, to be an achiever, and to achieve your own happiness through your own efforts."}/></div>
			</header>
			<div className='projects-body'>
				<div className='BoxShadow'>_</div>
				<div className="sections">Major Projects</div>
				
				<swiper-container slides-per-view="3" speed="500" loop="true" /*spaceBetween={"30px"}*/ navigation="true" centeredSlides={true}>
					<swiper-slide><LargeCard title = "Lambda Check" quote="A Haskell Vulnerability Detector" image={haskell}></LargeCard></swiper-slide>
					<swiper-slide><LargeCard title = "Celite" quote="A Cellular Automata Simulator" image={celluar}></LargeCard></swiper-slide>
					<swiper-slide><LargeCard title = "Saltcast Chatbot" quote="A Salinity Oriented RAG Chatbot" image={wants}> </LargeCard></swiper-slide>
					<swiper-slide><LargeCard title = "Testif.Ai" quote="A LLM Based Test Generator" image={testifAi}></LargeCard></swiper-slide>
				</swiper-container>
				
				<div className="sections">Minor Projects</div>
			</div>
		</div>
	);
}

export default projects;
