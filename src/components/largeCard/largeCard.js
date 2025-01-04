import  React from 'react';
import { useState } from 'react';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";

import './largeCard.css';



//Declare Card with Motion Module Attached
const MotionCard = motion(Card)
const MotionTypo = motion(Typography)


function LargeCard({title, quote, image}) {
  const [isCardOpened, setCardOpened] = useState(false);
  //const [cardPosition, setCardPosition] = useState({ width: '30vw', height: '35vw' });


  return (
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
      
      
      width: isCardOpened ? '30vw' : '60vw' , height: isCardOpened ? '35vw' : '50vw', 
      '&:hover': isCardOpened ? {  transform: 'scale(1.05)', zIndex: 10,boxShadow: '0 0 90px 0px #A61C3C', cursor: 'pointer',  transformOrigin: 'center center', willChange: 'transform',} : {cursor: 'pointer'},
      
      }
      
      }>

      
      <MotionTypo layout
        animate={{fontSize: isCardOpened ? '40px' : '60px'}}
          sx={{ color: '#D8D78F', fontFamily: 'Rubik, sans-serif', fontWeight: 500, float : isCardOpened ? 'none': 'left' ,marginLeft: isCardOpened ? '0vw' : '4vw', marginTop: isCardOpened ? '0vw' : '1vw'}} 
        gutterBottom>

          {title}
      </MotionTypo>
      

      <motion.img layout="position" src={image} className="major-Image" style={{float : isCardOpened ? 'none': 'right' , marginRight: isCardOpened ? '0vw' : '2.5vw', marginTop: isCardOpened ? '0vw' : '1vw'}}/>

      <MotionTypo layout="position" sx={{ fontSize: 16, color: '#FF9B71', marginTop:"12px", fontStyle:'italic'}} gutterBottom>
          {quote}
      </MotionTypo>
    </MotionCard>
  );
}





export default LargeCard;