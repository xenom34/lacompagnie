import React from 'react';
import logo from '../img/logo.svg';
import '../style/App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Pop from "./Pop";
import PopConnexion from "./PopConnexion";
import Background from "./Background";
import Search from "./Search";
import DropdownChoice from "./DropdownChoice";
import Paiement from "./Paiement";
//import reactimg from "../img/reactimg.jpeg"

class App extends React.Component<any, any>{

    render() {
        return (
            <div className="App">
                <Paiement/>
            </div>

        );
    }
}

export default App
