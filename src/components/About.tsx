import React from 'react';
import '../style/App.css';
import 'reactjs-popup/dist/index.css';
import PopConnexion from "./PopConnexion";
import PopInscription from "./PopInscription";



class About extends React.Component<any, any> {
    state = {isLoading: true}

    ClickInscriptionButton = () => {
        this.setState({isLoading: true})
    }
    ClickConnexionButton = () => {
        this.setState({isLoading: false})

    }

    render() {
        const {isLoading} = this.state;

        return (

            <div id="about" className="website-slider-item" data-navbar-slide="navbar-dark">
                <div className="website-slider-item-inner">
                    <div className="container text-center"><h2 className="h1">Profil</h2>
                        <div className="divider bg-primary mx-auto"></div>

                        <div className="row">
                            <div className="col-12 col-lg-10 mx-auto">
                                <div className="d-table mx-auto mb-7">
                                    <div
                                        className="nav nav-pills-modern nav-pills-modern-soft-dark justify-content-center rounded"
                                        id="about-tab" role="tablist">
                                        {isLoading ?
                                            <div>
                                            <a onClick={this.ClickConnexionButton} className="nav-link active" id="tab-forward-tab"
                                               data-toggle="pill" href="#tab-forward" role="tab"
                                               aria-controls="tab-forward"
                                               aria-selected="true"> Connexion </a>
                                            <PopConnexion/>
                                            </div>
                                            :
                                            <div>
                                            <a onClick={this.ClickInscriptionButton}
                                                className="nav-link" id="tab-together-tab" data-toggle="pill"
                                                href="#tab-together"
                                                role="tab" aria-controls="tab-together"
                                                aria-selected="false"> Inscription </a>
                                                <PopInscription/>
                                            </div>
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);

         }
    }


export default About;
