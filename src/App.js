import React from 'react';
import Carousel from "react-gallery-carousel";
import 'react-gallery-carousel/dist/index.css';
import './App.css';
import PropTypes from "prop-types";
import raccoon_idle from './raccoon/raccoon_idle.gif';
import raccoon_walk from './raccoon/raccoon_walk.gif';
import raccoon_hurt from './raccoon/raccoon_hurt.gif';
import raccoon_death from './raccoon/raccoon_death.gif';
import raccoon_taunt_1 from './raccoon/raccoon_taunt_1.gif';
import raccoon_taunt_2 from './raccoon/raccoon_taunt_2.gif';

const YoutubeEmbed = ({embedId}) => (
    <div className="video">
        <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

const App = () => {

    let images = [];

    for (let i = 0; i < 898; i++) {
        images.push({
            src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`,
        });
    }

    return (
        <div className="App">
            <h1>Elias M152</h1>
            <Carousel className="Gallery" images={images} style={{height: 600, width: 600, margin: 15}}/>
            <YoutubeEmbed embedId="Gmhh6Ppb16k"/>
            <div className="Anim">
                <img src={raccoon_idle} alt="raccoon idle"/>
                <img src={raccoon_walk} alt="raccoon walk"/>
                <img src={raccoon_hurt} alt="raccoon hurt"/>
                <img src={raccoon_death} alt="raccoon death"/>
                <img src={raccoon_taunt_1} alt="raccoon taunt 1"/>
                <img src={raccoon_taunt_2} alt="raccoon taunt 2"/>
            </div>
        </div>
    );
}

export default App;
