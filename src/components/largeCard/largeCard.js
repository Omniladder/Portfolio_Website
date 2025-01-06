import  React from 'react';
import { useState } from 'react';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";




import githubPic from '../../pics/github.jpg';
import linkPic from '../../pics/link.jpg';
import downloadPic from '../../pics/download.jpg';

import './largeCard.css';



//Declare Card with Motion Module Attached
const MotionCard = motion.create(Card)
const MotionTypo = motion.create(Typography)


export function LargeCard({title, quote, image, background, github, webLink, downloadFile, tech1, tech2, tech3, tech4, tech5, tech6, initalOpen = true}) {
  const [iscardopened, setCardOpened] = useState(initalOpen);
  //const [cardPosition, setCardPosition] = useState({ width: '30vw', height: '35vw' });


  const handleDivClick = (event) => {
    event.stopPropagation(); // Prevent event propagation
  };

  return (
    <div>
    
    { iscardopened ? null : <div className="greyout" onClick={handleDivClick} style={{pointerEvents: 'auto', pointer : 'none'}}></div>}
    <MotionCard 
    

    whileHover={iscardopened ? { scale: 1.1 } : {scale : 1}}
    transition={{ duration: 0.25, ease: "easeInOut" }}

    className='card'

    //Clickable Functionality
    iscardopened = {iscardopened} 

    /*
    onClick = {() => 
    {
      setCardOpened(!iscardopened);
    }}
      */
    
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
  
      position: iscardopened ? 'relative' : 'fixed', inset: iscardopened ? 'auto' : '0 0 0 0',
      
      
      width: iscardopened ? '30vw' : '60vw' , height: iscardopened ? '35vw' : '48vw', 
      '&:hover': iscardopened ? {  transform: 'scale(1.05)', zIndex: 10,boxShadow: '0 0 90px 0px #A61C3C', cursor: 'pointer',  transformOrigin: 'center center', willChange: 'transform',} : {cursor: 'pointer'},
      
      }}

      >


      <div>  
        <div style={{display : 'flex' ,  flexDirection: 'column', maxWidth: '28vw', justifyContent : iscardopened ? 'center' : 'none',
        alignItems: iscardopened ? 'center' : 'none', float: iscardopened ? 'none' : 'right', width: '100%'}} >

          
          <motion.img layout="position" src={image} className="major-Image" style={{float : iscardopened ? 'auto': 'right' ,marginLeft: iscardopened ? '1.25vw' : 'auto',marginRight: iscardopened ? 'auto' : '2.5vw', marginTop: iscardopened ? '1.5vw' : '0vw'}}/>
          

          {iscardopened ? null : (
          <motion.div className='linkGrid' >

            {github  ? (<a href={github} onClick={handleDivClick}> <motion.img className="link"  src={githubPic}/></a>) : null}

            {webLink ? (<a href={webLink} onClick={handleDivClick}> <motion.img className="link"   src={linkPic}/> </a> ) : null}

            {downloadFile ? (<a href={downloadFile} onClick={handleDivClick} download> <motion.img className="link" src={downloadPic}/></a>) : null}
          </motion.div>
        )}
        </div>

        <div style={{display : 'flex', flexDirection: 'column', marginTop : iscardopened ? 'auto' : '2vw'}}>
          <div style={{textAlign : 'center'}}>
          <MotionTypo layout className='title'
            animate={{fontSize: iscardopened ? '40px' : '50px'}}
              sx={{ color: '#D8D78F', fontFamily: 'Rubik, sans-serif', fontWeight: 500}} 
            >

              {title}
          </MotionTypo>
          
          
          

          <MotionTypo layout="position" className='quote'  gutterBottom>

              {quote}
          </MotionTypo>
          </div>

          <motion.div className="backgroundDiv" animate={{ y: iscardopened ? '27vw' : '0vw',}} transition={{ duration: .45, type : 'spring', damping: 15, stiffness: 130}}>
            
            <div className="backgroundHead">
            Background:
            </div>
            <div className="backgroundText">
              {background}
            </div>
          </motion.div>

        </div>


          
            
         
        
      </div>

      <div className="TechnologyHead">
        Technologies:
      </div>
            
      <div className="techGrid" >
        <img src={tech1} className='techImg'/>
        <img src={tech2} className='techImg'/>
        <img src={tech3} className='techImg'/>
        <img src={tech4} className='techImg'/>
        <img src={tech5} className='techImg'/>
        <img src={tech6} className='techImg'/>
      </div>

     
    </MotionCard>
   
    </div>
  
  );
}