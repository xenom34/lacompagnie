import React from 'react';
import logo from '../img/logo.svg';
import '../style/App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Choix from "./Choix"
import DropdownChoice from "./DropDownChoice";
//import reactimg from "../img/reactimg.jpeg"

class App extends React.Component<any, any>{

    render() {
        return (
            <div className="App">
                <Choix/>
            </div>

        );
    }
}

export default App;