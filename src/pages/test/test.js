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
                        background="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum metus in sapien vestibulum fringilla. Sed luctus, arcu vel vestibulum auctor, nisl nunc facilisis risus, non fermentum eros libero vel lectus. Integer aliquet nisi eget augue ornare, vel tempor mi sagittis. Vivamus nec justo nec ligula luctus ultrices id nec sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum metus in sapien vestibulum fringilla. Sed luctus, arcu vel vestibulum auctor, nisl nunc facilisis risus, non fermentum eros libero vel lectus. Integer aliquet nisi eget augue ornare, vel tempor mi sagittis. Vivamus nec justo nec ligula luctus ultrices id nec sem."
                    ></LargeCard>
                </div>
            </center>
        </div>
    )
}

export default test;