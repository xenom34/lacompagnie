import React from 'react';
import logo from '../img/logo.svg';
import '../style/App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ModeNuit from "./ModeNuit";




class Game extends React.Component<any, any>{
    render() {
        return (
            <div className="App">

                <ModeNuit/>



            </div>

        );
    }
}

export default Game;
