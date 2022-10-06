import React from 'react';

import '../style/App.css';
import 'reactjs-popup/dist/index.css';

const src =
    "https://xenom.altair-studios.fr/video.mp4";



class Piles extends React.Component<any, any>{
    render() {
        return (

            <video playsInline autoPlay loop muted controls style={{pointerEvents:"none"}} width="100%">
                <source src={src} type="video/mp4"/>

            </video>

        );
    }
}

export default Piles;
