import React from 'react';
import '../style/App.css';
import 'reactjs-popup/dist/index.css';
import Footer from "./Footer";
import Navigation from "./Navigation";
import Slider_Items_Home from "./Slider Item_Home";

import Slide from "./Slide";




class App extends React.Component<any, any>{


    render() {

                return (

                    <div style={{ color:"color",opacity:0.7}}   className="App">
                      <Navigation/>
                        <Slider_Items_Home/>

                        <Slide/>
                        <Footer/>

                    </div>


                );
            }

}

export default App
