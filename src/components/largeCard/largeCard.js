import  React from 'react';
import { useState } from 'react';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";

import './largeCard.css';

function LargeCard({title, quote, image}) {
  const [isCardOpened, setCardOpened] = useState(true);
  const [cardPosition, setCardPosition] = useState({ width: '30vw', height: '35vw' });


  return (
    <Card 
    
    //Clickable Functionality
    isCardOpened = {isCardOpened} 
    onClick = {() => 
    {
      setCardOpened(!isCardOpened);

    }}
    
    layout

    sx={{   
      //CSS Styling
      zIndex: 10, backgroundColor: '#A61C3C', borderRadius: '10%', border: '5px solid black', borderColor: '#FF9B71',  boxShadow: '15px 13px 8px rgba(0, 0, 0, 0.5)', 

      margin: 'auto',

      //Transistion Speeds
      transition: 'transform 0.25s ease-in-out',
      transition: "all 0.5s ease",

      //Adjusted Section of CSS
  
      position: isCardOpened ? 'relative' : 'fixed', inset: isCardOpened ? 'auto' : '0 0 0 0',
      
      
      width: isCardOpened ? '30vw' : '60vw' , height: isCardOpened ? '35vw' : '50vw', 
      '&:hover': isCardOpened ? {  transform: 'scale(1.05)', zIndex: 10,boxShadow: '0 0 90px 0px #A61C3C', cursor: 'pointer',  transformOrigin: 'center center', willChange: 'transform',} : {cursor: 'pointer'},
      
      }
      
      }>

      <Typography sx={{ fontSize: 30, color: '#D8D78F', fontFamily: 'Rubik, sans-serif', fontWeight: 500}} gutterBottom>
          {title}
      </Typography>

      <img src={image} className="major-Image" />

      <Typography sx={{ fontSize: 16, color: '#FF9B71', marginTop:"12px", fontStyle:'italic'}} gutterBottom>
          {quote}
      </Typography>
    </Card>
  );
}





export default LargeCard;