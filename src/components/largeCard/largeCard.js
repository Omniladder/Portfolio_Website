import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';


import './largeCard.css';

function largeCard({title, quote, image}) {
  return (
    <Card sx={{ width: '30vw' , height: '35vw', backgroundColor: '#A61C3C', borderRadius: '10%', border: '5px solid black', borderColor: '#FF9B71', transition: 'transform 0.25s ease-in-out', boxShadow: '15px 13px 8px rgba(0, 0, 0, 0.5)', 
      '&:hover': { 
        boxShadow: '0 0 14px 0px #A61C3C', cursor: 'pointer', transformOrigin: 'center center', willChange: 'transform',}
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

export default largeCard;