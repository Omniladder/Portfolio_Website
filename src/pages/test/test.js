import './test.css'

import LargeCard from '../../components/largeCard/largeCard.js';
import haskell from '../../pics/haskell.jpeg';


function test(){

    return(
        <div className="App">
            <center>
                <div className="cardContainer">
                    <LargeCard 
                        title = "Lambda Check" 
                        quote="A Haskell Vulnerability Detector" 
                        image={haskell}
                        background="Lorem Ipsum"
                    ></LargeCard>
                </div>
            </center>
        </div>
    )
}

export default test;