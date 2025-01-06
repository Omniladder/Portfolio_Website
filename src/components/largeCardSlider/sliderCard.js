
import LargeCard from '../../components/largeCard/largeCard.js';
import { SwiperSlide } from 'swiper/react';


export function sliderCard({title, quote, image, background, github, webLink, downloadFile, tech1, tech2, tech3, tech4, tech5, tech6}){
    
    return(
        <SwiperSlide>
            {({ isVisible }) => isVisible ? (
                <LargeCard 
                    title ={title}
                    quote={quote}
                    image={image}
                    background={background}
                    github={github}
                    webLink={webLink}
                    downloadFile={downloadFile}
                    tech1={tech1}
                    tech2={tech2}
                    tech3={tech3}
                    tech4={tech4}
                    tech5={tech5}
                    tech6={tech6}
                ></LargeCard>
            ) : null }
        </SwiperSlide>
    )
}

