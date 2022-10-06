import React from 'react';

import '../style/App.css';
import 'reactjs-popup/dist/index.css';

const src =
    "https://xenom.altair-studios.fr/video.mp4";



class Piles extends React.Component<any, any>{
    render() {
        return (
            <div className={"FamilleVideo"}>
                <div className="Images">
                    <img src="assets/images/photos/photo-1.jpg" alt=""/>
                </div>
                <div className="Video">
                    <video autoPlay muted loop>
                            <source src="https://xenom.altair-studios.fr/video.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="overlay-inner bg-dark opacity-50"></div>
            </div>

        );
    }
}

export default Piles;
