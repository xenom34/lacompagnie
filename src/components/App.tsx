import React from 'react';
import logo from '../img/logo.svg';
import '../style/App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Pop from "./Pop";
import PopConnexion from "./PopConnexion";
import Background from "./Background";
import Cartes from "./Cartes";
//import reactimg from "../img/reactimg.jpeg"





class App extends React.Component<any, any>{
    render() {
        return (
            <div className="App">
                <Cartes/>
            </div>

        );
    }
}

export default App
