import React from 'react';
import logo from '../img/logo.svg';
import '../style/App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import PopInscription from "./PopInscription";
import PopConnexion from "./PopConnexion";
//import Background from "./Background";
import Search from "./Search";
import DropdownChoice from "./DropdownChoice";
import Slider_Items_Home from "./Slider Item_Home";
import About from "./About";

class BoxHead extends React.Component<any, any>{


    render() {

        return (
            <div className="Recherche">

                     <Search/>



            </div>

        );
    }
}

export default BoxHead;
