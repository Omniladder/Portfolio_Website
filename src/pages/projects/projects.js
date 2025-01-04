import './projects.css';

//These are the internally created components created for this program
import WebHeader from '../../components/header/header.js';
import LargeCard from '../../components/largeCard/largeCard.js';



//Swiper components
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';


//Swiper CSS
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

// These are the imports for images used in large project sliders
import haskell from '../../pics/haskell.jpeg';
import cellular from '../../pics/cells.png';
import wants from '../../pics/clientWants.png';
import testifAi from '../../pics/TestifAi.png';





function projects() {
	register();


	return (
		
		<div className="App">
			<header>
				<div><WebHeader title={"Projects"} quote={"The purpose of life is not to be happy but to be productive, to be an achiever, and to achieve your own happiness through your own efforts."}/></div>
			</header>
			<div className='projects-body'>
				<div className='BoxShadow'>_</div>
				<div className="sections">Major Projects</div>
				
				{/*<swiper slides-per-view={3} speed={500} loop={true} navigation={true} centeredSlides={false}  >*/}
				<Swiper
					modules={[EffectCoverflow, Pagination]}
					effect='coverflow'
					slidesPerView={3}
					speed={500}

					loop={true}
					loopedslides={4} 

					zIndex={0}
					spaceBetween={100}

					pagination={{clickable: true}}
					className="cardswiper"

					virtual={false}
					lazy={{ loadPrevNext: true, loadPrevNextAmount: 3 }}

					

					style={{ overflow: 'visible' }}
					coverflowEffect=
						{{
							rotate: -12,
							slideShadows: false	
						}}
				>
					{/* Slide 1 Lambda Check*/}
					<SwiperSlide>
						{({ isVisible }) => isVisible ? (
							<LargeCard 
								title = "Lambda Check" 
								quote="A Haskell Vulnerability Detector" 
								image={haskell}
							></LargeCard>
						) : null }
					</SwiperSlide>

					{/* Slide 2 Celite*/}
					<SwiperSlide>{
						({ isVisible }) => isVisible ? ( //Stops rendering when off of swiper
							<LargeCard 
								title = "Celite" 
								quote="A Cellular Automata Simulator" 
								image={cellular}
							></LargeCard>
						) : null }
					</SwiperSlide>

					{/* Slide 3 Salinity Chatbot*/}
					<SwiperSlide>{
						({ isVisible }) => isVisible ? (
							<LargeCard 
								title = "Saltcast Chatbot" 
								quote="A Salinity Oriented RAG Chatbot" 
								image={wants}
							></LargeCard>
						) : null }
					</SwiperSlide>

					{/* Slide 4 TestifAi*/}
					<SwiperSlide>{
						({ isVisible }) => isVisible ? (
							<LargeCard 
								title = "Testif.Ai" 
								quote="A LLM Based Test Generator" 
								image={testifAi}
							></LargeCard>
						) : null }
					</SwiperSlide>



				</Swiper>
				
				<div className="sections">Minor Projects</div>
			</div>
		</div>
	);
}

export default projects;
