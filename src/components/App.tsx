import React from 'react';
import logo from '../img/logo.svg';
import '../style/App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Pop from "./Pop";
import PopConnexion from "./PopConnexion";
import Background from "./Background";





class App extends React.Component<any, any>{
    render() {
        return (
            <div className="App" style={{ backgroundImage :'url("https://wallpapercave.com/wp/wp5522841.jpg")',height: "750px", backgroundRepeat: "no-repeat"
            }}>

                <Pop/>
                <PopConnexion/>



            </div>

        );
    }
}

export default App
