import './test.css'

import  React, { useState } from 'react';

import Modal from '@mui/material/Modal';

import {LargeCard} from '../../components/largeCard/largeCard.js';
import haskell from '../../pics/haskell.jpeg';

import haskellLogo from '../../pics/haskellLogo.png';
import pythonLogo from '../../pics/pythonLogo.png';
import fastAPILogo from '../../pics/fastapiLogo.svg';
import SQLLogo from '../../pics/sqlLogo.png';
import restLogo from '../../pics/restLogo.png';

const lambdaCardProps = {
        title : "Lambda Check"
        ,quote : "A Haskell Vulnerability Detector"
        ,image : haskell
        ,background : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum metus in sapien vestibulum fringilla. Sed luctus, arcu vel vestibulum auctor, nisl nunc facilisis risus, non fermentum eros libero vel lectus. Integer aliquet nisi eget augue ornare, vel tempor mi sagittis. Vivamus nec justo nec ligula luctus ultrices id nec sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum metus in sapien vestibulum fringilla. Sed luctus, arcu vel vestibulum auctor, nisl nunc facilisis risus, non fermentum eros libero vel lectus. Integer aliquet nisi eget augue ornare, vel tempor mi sagittis. Vivamus nec justo nec ligula luctus ultrices id nec sem."
        ,github : "https://github.com/jamesmontebell/lambda-check"
        ,webLink : "https://devpost.com/software/lambda-check"
        ,downloadFile : "./downloads/Resume-1.pdf"
        ,tech1 : haskellLogo
        ,tech2 : pythonLogo
        ,tech3 : fastAPILogo
        ,tech4 : SQLLogo
        ,tech5 : restLogo
}

function Test(){

    //Lambda Open Test Functions
    const [isLambdaOpen, setLambdaOpen] = useState(false);
    const lambdaOpen = () => setLambdaOpen(true);
    const lambdaClose = () => setLambdaOpen(false);



    return(
        <div className="App">
            <div style={{width: 'fit-content'}} onClick = {() => {lambdaOpen()}}><LargeCard {...{...lambdaCardProps, initalOpen : true }}></LargeCard></div>
            
            <Modal
                open={isLambdaOpen}
                onClose={lambdaClose}
                aria-labelledby="lambdaModal"
                aria-describedby="Opened version of card for Lambda check">
                    
                <div style={{width: 'fit-content'}} onClick = {() => {lambdaClose()}}>
                    <LargeCard {...{...lambdaCardProps, initalOpen : false }}></LargeCard>
                </div>
            </Modal>
            

        </div>
    )
}

export default Test;