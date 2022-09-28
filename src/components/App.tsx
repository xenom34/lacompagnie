import React from 'react';
import logo from '../img/logo.svg';
import '../style/App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Pop from "./Pop";
import PopConnexion from "./PopConnexion";

class App extends React.Component<any, any>{
    private readonly popRef: React.RefObject<any>;
    private readonly popConnexionRef: React.RefObject<any>;

    constructor(props:any) {
        super(props);

        this.popRef = React.createRef();
        this.popConnexionRef = React.createRef();

    }

    render() {
        return (
            <div className="App">
                <header> VEUX-TU JOUER ?</header>
                <Pop ref={this.popRef} link={this.popRef}/>
                <PopConnexion ref={this.popConnexionRef}/>

            </div>
        );
    }
}

export default App
