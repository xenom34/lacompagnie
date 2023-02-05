import video from "../img/bg.mp4";
import BoxHead from "./BoxHead";
import React from "react";
import App from "./App";



interface WebsiteSliderProps {}

const WebsiteAccueil: React.FC<WebsiteSliderProps> = () => {
    return (
        <div id="home" className="website-slider-item" data-navbar-slide="navbar-dark">
            <div className="overlay overlay-global">

                <div className="overlay-inner overlay-video">
                    <video autoPlay muted loop>
                        <source src={video}type="video/mp4"/>
                    </video>
                </div>

                <div className="overlay-inner bg-dark opacity-50">

                </div>
            </div>
            <div className="website-slider-item-inner">

                <div className="container">

                    <div className="row">
                        <div className="col-lg-10 col-xl-9 mx-auto text-center text-white">
                            <h1 className="display-4 mb-5">Bienvenue sur la Compagnie</h1>
                            <p className="lead mb-7">
                                Besoin de partir très loin ? Paisible sur terre et même dans les nuages, Vous cliquez
                                vous volez !
                            </p>
                            <button type="button"
                                    className="btn btn-white d-block d-md-inline-block w-100 w-md-auto mb-3 mb-md-0"
                                    data-toggle="modal" data-target="#subscribeModal">
                                Information
                            </button>
                            <a href="#about"
                               className="btn btn-soft-white scrollto d-block d-md-inline-block w-100 w-md-auto ml-md-3">
                                Profil
                            </a>

                        </div>
                        <div className="BoxHead">
                            <BoxHead/>
                        </div>

                    </div>

                </div>
            </div>
        </div>);
    }

export default WebsiteAccueil;