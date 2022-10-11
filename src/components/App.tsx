import React from 'react';
import logo from '../img/logo.svg';
import '../style/App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Pop from "./Pop";
import PopConnexion from "./PopConnexion";
import ModeNuit from "./ModeNuit";
import Piles from "./Piles";
import Contact from "./Contact";
import Features from "./Features";
import Footer from "./Footer";
import Global_Overlay from "./Global_Overlay";
import Loader from "./Loader";
import Navigation from "./Navigation";
import Services from "./Services";
import Slider_Items_about from "./Slider_Items_about";
import Slider_Items from "./Slider_Items";
import Solutions from "./Solutions";
import Subscribe from "./Subscribe";
import {Modal} from "bootstrap";



class App extends React.Component<any, any>{
    componentDidMount() {

            if ($('.overlay-inner.slide-background').length > 0) {
            $('.overlay-inner.slide-background').vegas({
                preload: true,
                timer: false,
                delay: 10000,
                transition: 'slideLeft2',
                transitionDuration: 5000,
                firstTransition: "fade",
                slides: [
                    { src: 'assets/images/photos/photo-4.jpg' },
                    { src: 'assets/images/photos/photo-5.jpg' },
                    { src: 'assets/images/photos/photo-6.jpg' },
                    { src: 'assets/images/photos/photo-7.jpg' }
                ],
                animation: 'kenburns',
                animationDuration: 5000
            });
        }

    }

    render() {
        return (
            <div className="App">
                <Loader/>
                <Navigation/>
                <Slider_Items/>
                <Slider_Items_about/>
                <Solutions/>
                <Features/>
                <Services/>
                <Contact/>
                <Footer/>
                <Subscribe/>


            </div>

        );
    }
}

export default App
