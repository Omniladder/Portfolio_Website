import  React from 'react';
import { useState } from 'react';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { animate, motion } from "framer-motion";


import { useNavigate } from 'react-router-dom';


import githubPic from '../../pics/github.jpg';
import linkPic from '../../pics/link.jpg';
import downloadPic from '../../pics/download.jpg';

import './largeCard.css';



//Declare Card with Motion Module Attached
const MotionCard = motion(Card)
const MotionTypo = motion(Typography)


function LargeCard({title, quote, image, background, github, webLink, downloadFile, tech1, tech2, tech3, tech4, tech5, tech6}) {
  const [isCardOpened, setCardOpened] = useState(true);
  //const [cardPosition, setCardPosition] = useState({ width: '30vw', height: '35vw' });

const navigate = useNavigate();


  const handleDivClick = (event) => {
    event.stopPropagation(); // Prevent event propagation
  };

  return (
    <>
    { isCardOpened ? null : <div class="greyout" onClick={handleDivClick} style={{pointerEvents: 'auto', pointer : 'none'}}></div>}
    <MotionCard 
    

    whileHover={isCardOpened ? { scale: 1.1 } : {scale : 1}}
    transition={{ duration: 0.25, ease: "easeInOut" }}


    //Clickable Functionality
    isCardOpened = {isCardOpened} 
    onClick = {() => 
    {
      setCardOpened(!isCardOpened);
    }}
    
    //Enable Motion Transistions
    layout

    sx={{   
      
      //CSS Styling
      zIndex: 10, backgroundColor: '#A61C3C', borderRadius: '10%', border: '5px solid black', borderColor: '#FF9B71',  boxShadow: '15px 13px 8px rgba(0, 0, 0, 0.5)', 

      margin: 'auto',

      //Transistion Speeds
      //transition: 'transform 0.25s ease-in-out',
      //transition: "all 0.5s ease", //Basic CSS way of having a nice transistion

      

      //Adjusted Section of CSS
  
      position: isCardOpened ? 'relative' : 'fixed', inset: isCardOpened ? 'auto' : '0 0 0 0',
      
      
      width: isCardOpened ? '30vw' : '60vw' , height: isCardOpened ? '35vw' : '48vw', 
      '&:hover': isCardOpened ? {  transform: 'scale(1.05)', zIndex: 10,boxShadow: '0 0 90px 0px #A61C3C', cursor: 'pointer',  transformOrigin: 'center center', willChange: 'transform',} : {cursor: 'pointer'},
      
      }}

      >


      <div>  
        <div style={{display : 'flex', flexDirection: 'column', maxWidth: '28vw', float: isCardOpened ? 'none' : 'right'}}>
          <motion.img layout="position" src={image} className="major-Image" style={{float : isCardOpened ? 'none': 'right' , marginRight: isCardOpened ? '0vw' : '2.5vw', marginTop: isCardOpened ? '1.5vw' : '0vw'}}/>


          {isCardOpened ? null : (
          <motion.div class='linkGrid' >

            {github  ? (<a href={github} onClick={handleDivClick}> <motion.img class="link"  src={githubPic}/></a>) : null}

            {webLink ? (<a href={webLink} onClick={handleDivClick}> <motion.img class="link"   src={linkPic}/> </a> ) : null}

            {downloadFile ? (<a href={downloadFile} onClick={handleDivClick} download> <motion.img class="link" src={downloadPic}/></a>) : null}
          </motion.div>
        )}
        </div>

        <div style={{display : 'flex', flexDirection: 'column', marginTop : isCardOpened ? 'auto' : '2vw'}}>
          <MotionTypo layout className='title'
            animate={{fontSize: isCardOpened ? '40px' : '50px'}}
              sx={{ color: '#D8D78F', fontFamily: 'Rubik, sans-serif', fontWeight: 500}} 
            >

              {title}
          </MotionTypo>
          
          
          

          <MotionTypo layout="position" className='quote'  gutterBottom>

              {quote}
          </MotionTypo>


          <motion.div class="backgroundDiv" animate={{ y: isCardOpened ? '27vw' : '0vw',}} transition={{ duration: .45, type : 'spring', damping: 15, stiffness: 130}}>
            
            <div class="backgroundHead">
            Background:
            </div>
            <div class="backgroundText">
              {background}
            </div>
          </motion.div>

        </div>


          
            
         
        
      </div>

      <div class="TechnologyHead">
        Technologies:
      </div>
            
      <div class="techGrid" >
        <img src={tech1} class='techImg'/>
        <img src={tech2} class='techImg'/>
        <img src={tech3} class='techImg'/>
        <img src={tech4} class='techImg'/>
        <img src={tech5} class='techImg'/>
        <img src={tech6} class='techImg'/>
      </div>

     
    </MotionCard>
    </>
  
  );
}





export default LargeCard;