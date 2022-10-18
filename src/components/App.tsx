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
import Slider_Items_Home from "./Slider Item_Home";
import Solutions from "./Solutions";
import Subscribe from "./Subscribe";
import {Modal} from "bootstrap";



class App extends React.Component<any, any>{

    render() {
        return (
            <div className="App">

                <Navigation/>
                <Slider_Items_Home/>



            </div>

        );
    }
}

export default App
