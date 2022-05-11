import React from 'react';
import Carousel from "react-gallery-carousel";
import 'react-gallery-carousel/dist/index.css';


const App = () => {

    let images = [];

    for (let i = 0; i < 898; i++) {
        images.push({
            src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`,
        });
    }

    return (
        <div>
            <Carousel images={images} style={{height: 750, width: 750}}/>
        </div>
    );
}

export default App;
