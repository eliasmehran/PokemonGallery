import React from 'react';
import Carousel from "react-gallery-carousel";
import 'react-gallery-carousel/dist/index.css';
import './App.css';
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
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
            <Carousel className="Gallery" images={images} style={{height: 700, width: 700, margin: 15}}/>
            <YoutubeEmbed embedId="Gmhh6Ppb16k" />
        </div>
    );
}

export default App;
