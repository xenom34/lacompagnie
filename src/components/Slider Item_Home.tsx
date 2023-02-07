import React from 'react';
import About from "./About";
import WebsiteAccueil from "./Accueil";
import Information from "./Information";
import Features from "./Features";

class WebsiteSlider extends React.Component<any, any> {
    private about: any;

     Change = () => {
        this.about.OubliToken()
    }

    NavConnect = () => {
        this.props.NavConnect()

    }

render() {


    return (
        <div className="website-slider">
            <div className="website-slider-inner">
                <WebsiteAccueil/>
                <About NavConnect={this.NavConnect}ref={(child) => (this.about = child) } ChangeStatut={this.props.ChangeStatut}/>
                <Information/>
                <Features/>

            </div>
        </div>
    );
}
};

export default WebsiteSlider;
