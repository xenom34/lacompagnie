import React from 'react';
import '../style/App.css';
import 'reactjs-popup/dist/index.css';
import Footer from "./Footer";
import Navigation from "./Navigation";
import Slider_Items_Home from "./Slider Item_Home";
import Slide from "./Slide";
import Global_Overlay from "./Global_Overlay";


class App extends React.Component<any, any> {
    private Slider_Items: any;
    private Navigation: any;

    ChangeState = () => {
        let changeState = event

    }

    Change = () => {
        this.Slider_Items.Change();
    }

    NavConnect = () => {
        this.Navigation.NavConnect()

    }

    render() {
        return (
            <div style={{color: "color", opacity: 0.7}} className="App">

                <Global_Overlay/>
                <Navigation ref={(child) => (this.Navigation = child) }NavConnect={this.NavConnect} oToken={this.Change} changeState={this.ChangeState}/>
                <Slider_Items_Home NavConnect={this.NavConnect}ref={(child) => (this.Slider_Items = child) } changeState={this.ChangeState}/>

                <Footer/>
            </div>
        );
    }
}

export default App
