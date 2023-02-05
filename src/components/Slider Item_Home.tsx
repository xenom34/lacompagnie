import React from 'react';
import About from "./About";
import WebsiteAccueil from "./Accueil";
import Information from "./Information";
import Features from "./Features";
import {useNavigate} from "react-router-dom";

interface WebsiteSliderProps {}

const WebsiteSlider: React.FC<WebsiteSliderProps> = () => {
    let Change = () => {
        let history = useNavigate();
        history("#features")
    }

    return (
        <div className="website-slider">
            <div className="website-slider-inner">
                <WebsiteAccueil change={Change}/>
                <About/>
                <Information/>
                <Features/>

            </div>
        </div>
    );
};

export default WebsiteSlider;
