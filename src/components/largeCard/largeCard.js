import  React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useState } from 'react';


import './largeCard.css';

function LargeCard({title, quote, image}) {
  const [isCardOpened, setCardOpened] = useState(false);
  return (
    <Card sx={{ 
      
      //CSS Styling
      width: '30vw' , zIndex: 10, height: '35vw', backgroundColor: '#A61C3C', borderRadius: '10%', border: '5px solid black', borderColor: '#FF9B71', transition: 'transform 0.25s ease-in-out', boxShadow: '15px 13px 8px rgba(0, 0, 0, 0.5)', 
      '&:hover': {  transform: 'scale(1.05)', zIndex: 10,boxShadow: '0 0 90px 0px #A61C3C', cursor: 'pointer', transformOrigin: 'center center', willChange: 'transform',},
      
      //Clickable Functionality
      //isCardOpened : {isCardOpened}, onClick={() => setCardOpened(!isCardOpened)} ,
      
      }}>

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