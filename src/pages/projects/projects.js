import './projects.css';
import  React, { useState } from 'react';


//These are the internally created components created for this program
import WebHeader from '../../components/header/header.js';
import {LargeCard} from '../../components/largeCard/largeCard.js';

//Modal Element used for popup cards
import Modal from '@mui/material/Modal';

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


//Logo Imports
import haskellLogo from '../../pics/haskellLogo.png';
import pythonLogo from '../../pics/pythonLogo.png';
import fastAPILogo from '../../pics/fastapiLogo.svg';
import SQLLogo from '../../pics/sqlLogo.png';
import restLogo from '../../pics/restLogo.png';



/**
 *  IN THIS REGION WE DECLARE THE VARIOUS CARD PROPS TO BE USED
 */

const lambdaCardProps = {
	title : "Lambda Check"
	,quote : "A Haskell Vulnerability Detector"
	,image : haskell
	,background : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum metus in sapien vestibulum fringilla. Sed luctus, arcu vel vestibulum auctor, nisl nunc facilisis risus, non fermentum eros libero vel lectus. Integer aliquet nisi eget augue ornare, vel tempor mi sagittis. Vivamus nec justo nec ligula luctus ultrices id nec sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum metus in sapien vestibulum fringilla. Sed luctus, arcu vel vestibulum auctor, nisl nunc facilisis risus, non fermentum eros libero vel lectus. Integer aliquet nisi eget augue ornare, vel tempor mi sagittis. Vivamus nec justo nec ligula luctus ultrices id nec sem."
	,github : "https://github.com/jamesmontebell/lambda-check"
	,webLink : "https://devpost.com/software/lambda-check"
	,tech1 : haskellLogo
	,tech2 : pythonLogo
	,tech3 : fastAPILogo
	,tech4 : SQLLogo
	,tech5 : restLogo
}

const celiteCardProps = {
	title : "Celite"
	,quote : "A Cellular Automata Simulator" 
	,image : cellular
}

const wantsCardProps = {
	title : "Saltcast Chatbot" 
	,quote : "A Salinity Oriented RAG Chatbot" 
	,image : wants
}

const testCardProps = {
	title : "Testif.Ai" 
	,quote : "A LLM Based Test Generator" 
	,image : testifAi
}






export function Projects() {
	register();

	//Lambda Open Test Functions
	const [isLambdaOpen, setLambdaOpen] = useState(false);
	const lambdaOpen = () => setLambdaOpen(true);
	const lambdaClose = () => setLambdaOpen(false);

	//Celite Open Test Functions
	const [isCeliteOpen, setCeliteOpen] = useState(false);
	const celiteOpen = () => setCeliteOpen(true);
	const celiteClose = () => setCeliteOpen(false);

	//Saltcast Chatbot Open Test Functions
	const [isWantsOpen, setWantsOpen] = useState(false);
	const wantsOpen = () => setWantsOpen(true);
	const wantsClose = () => setWantsOpen(false);

	//Testif.Ai Open Test Functions
	const [isTestOpen, setTestOpen] = useState(false);
	const testOpen = () => setTestOpen(true);
	const testClose = () => setTestOpen(false);


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

					
					
					style={{ overflow: 'visible' , width: '100%'}}
					coverflowEffect=
						{{
							rotate: -12,
							slideShadows: false	
						}}
				>
					{/* Slide 1 Lambda Check*/}
					<SwiperSlide>
						{({ isVisible }) => isVisible ? (
							<div style={{width: 'fit-content'}} onClick = {() => {lambdaOpen()}}>
								<LargeCard {...{...lambdaCardProps, initalOpen : true }}></LargeCard>
							</div>
						) : null }
					</SwiperSlide>

					{/* Slide 2 Celite*/}
					<SwiperSlide>{
						({ isVisible }) => isVisible ? ( //Stops rendering when off of swiper
							<div style={{width: 'fit-content'}} onClick = {() => {celiteOpen()}}>
								<LargeCard {...{...celiteCardProps, initalOpen : true }}></LargeCard>
							</div>
						) : null }
					</SwiperSlide>


					{/* Slide 3 Salinity Chatbot*/}
					<SwiperSlide>{
						({ isVisible }) => isVisible ? (
							<div style={{width: 'fit-content'}} onClick = {() => {wantsOpen()}}>
								<LargeCard {...{...wantsCardProps, initalOpen : true }}></LargeCard>
							</div>
						) : null }
					</SwiperSlide>

					{/* Slide 4 TestifAi*/}
					<SwiperSlide>{
						({ isVisible }) => isVisible ? (
							<div style={{width: 'fit-content'}} onClick = {() => {testOpen()}}>
								<LargeCard {...{...testCardProps, initalOpen : true }}></LargeCard>
							</div>
						) : null }
					</SwiperSlide>



				</Swiper>


				{/** Modal Popup Section */}
			<Modal open={isLambdaOpen}>    
                <div style={{width: 'fit-content'}} onClick = {() => {lambdaClose()}}>
                    <LargeCard {...{...lambdaCardProps, initalOpen : false }}></LargeCard>
                </div>
            </Modal>

			<Modal open={isCeliteOpen}>
                <div style={{width: 'fit-content'}} onClick = {() => {celiteClose()}}>
                    <LargeCard {...{...celiteCardProps, initalOpen : false }}></LargeCard>
                </div>
            </Modal>

			<Modal open={isWantsOpen}>
                <div style={{width: 'fit-content'}} onClick = {() => {wantsClose()}}>
                    <LargeCard {...{...wantsCardProps, initalOpen : false }}></LargeCard>
                </div>
            </Modal>

			<Modal open={isTestOpen}>
                <div style={{width: 'fit-content'}} onClick = {() => {testClose()}}>
                    <LargeCard {...{...testCardProps, initalOpen : false }}></LargeCard>
                </div>
            </Modal>
				
				<div className="sections">Minor Projects</div>
			</div>
		</div>
	);
}
