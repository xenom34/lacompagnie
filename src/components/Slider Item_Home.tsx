import React from 'react';
import photoOne from "../img/photo-1.jpg"
import video from "../img/bg.mp4";
import Search from "./Search";
import About from "./About";
import BoxHead from "./BoxHead";
import WebsiteAccueil from "./Accueil";

import Solutions from "./Solutions";

interface WebsiteSliderProps {}

const WebsiteSlider: React.FC<WebsiteSliderProps> = () => {
    return (
        <div className="website-slider">
            <div className="website-slider-inner">
                <WebsiteAccueil/>
                <About/>
                <Solutions/>
            </div>
        </div>
    );
};

export default WebsiteSlider;
