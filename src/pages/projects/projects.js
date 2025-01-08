import './projects.css';
import  React, { useState } from 'react';


//These are the internally created components created for this program
import WebHeader from '../../components/header/header.js';
import { ProjectSlider } from '../../components/projectSlider/projectSlider.js';

//Swiper components
import { register } from 'swiper/element/bundle';



//Swiper CSS
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import { SmallCard } from '../../components/smallCard/smallCard.js';








export function Projects() {
	register();


	return (
		
		<div className="App">
			<header>
				<div><WebHeader title={"Projects"} quote={"The purpose of life is not to be happy but to be productive, to be an achiever, and to achieve your own happiness through your own efforts."}/></div>
			</header>
			<div className='projects-body'>
				<div className='BoxShadow'>_</div>
				<div className="sections">Featured Projects</div>
				
					<ProjectSlider></ProjectSlider>				
				
				<div className="sections">Project Catalog</div>

				<center>
					<div className='projectGrid'>
						<SmallCard
							title="Lambda Check"
						></SmallCard>

						<SmallCard
							title="Lambda Check"
						></SmallCard>

						<SmallCard
							title="Lambda Check"
						></SmallCard>

						<SmallCard
							title="Lambda Check"
						></SmallCard>

						<SmallCard
							title="Lambda Check"
						></SmallCard>

						<SmallCard
							title="Lambda Check"
						></SmallCard>

						<SmallCard
							title="Lambda Check"
						></SmallCard>
					</div>
				</center>

			</div>
		</div>
	);
}
