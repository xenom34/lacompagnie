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

            </div>
        );
    }
}

export default App;
