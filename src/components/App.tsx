import React from 'react';
import logo from '../img/logo.svg';
import '../style/App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Pop from "./Pop";

class App extends React.Component<any, any>{
    render() {
        return (
            <div className="App">
                <Pop/>
                <button className="foo-button mdc-button">
                    <div className="mdc-button__ripple"></div>
                    <span className="mdc-button__label">Button</span>
                </button>
            </div>
        );
    }
}

export default App;
