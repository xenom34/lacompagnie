import React from 'react';
import logo from '../img/logo.svg';
import '../style/App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Pop from "./Pop";
import PopConnexion from "./PopConnexion";

class App extends React.Component<any, any>{
    render() {
        return (
            <div className="App">
                <Pop/>
                <PopConnexion/>

            </div>
        );
    }
}

export default App
