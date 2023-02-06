import React from 'react';
import '../style/App.css';
import 'reactjs-popup/dist/index.css';
import PopConnexion from "./PopConnexion";
import PopInscription from "./PopInscription";
import Profil from "./Profil";


class About extends React.Component<any, any> {
    private prenom : any;
    private nom : any;
    private birth : any;
    private mail : any;
    state = {isLoading: true, isNotConnect: true}

    isConnected = (event:any, id:any) => {
        let id_enfant = id
        let token_enfant = event
        return this.RequeteAffichage(token_enfant, id)
    }

    RequeteAffichage = async (event: any, id:any) => {
        console.log("je suis le token = " + event)
        console.log("je suis ID :" + id)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("auth-token", event)

        var requestOptions = {
            method: 'GET',
            headers: myHeaders

        };

        const response = await fetch("https://api.altair-studios.fr:4318/compagnie/auth/" + id, requestOptions)
        const {status, error, auth_token, lName, fName, email, birthDate,} = await response.json();
        this.nom = lName;
        this.prenom = fName;
        console.log(fName)
        this.birth = birthDate;
        this.mail = email

        if (error === undefined) {
            alert("VOS PARAMETRES")
            this.setState({isNotConnect: false})

        } else {
            alert(error[0].errorType)
            this.setState({isNotConnect: true});
        }
    }

    ClickInscriptionButton = () => {
        this.setState({isLoading: true})
    }
    ClickConnexionButton = () => {
        this.setState({isLoading: false})

    }

    render() {
        const {isLoading} = this.state;
        const {isNotConnect} = this.state;
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
                                        {isNotConnect ? <div>
                                                {isLoading ?
                                                    <div>
                                                        <a onClick={this.ClickConnexionButton} className="nav-link active"
                                                           id="tab-forward-tab"
                                                           data-toggle="pill" href="#tab-forward" role="tab"
                                                           aria-controls="tab-forward"
                                                           aria-selected="true">✈️ Connexion </a>
                                                        <PopConnexion connected={this.isConnected}/>
                                                    </div>
                                                    :
                                                    <div>
                                                        <a onClick={this.ClickInscriptionButton}
                                                           className="nav-link" id="tab-together-tab" data-toggle="pill"
                                                           href="#tab-together"
                                                           role="tab" aria-controls="tab-together"
                                                           aria-selected="false">✈️ Inscription </a>
                                                        <PopInscription/>
                                                    </div>


                                                }
                                            </div>
                                            :

                                            <Profil birthDate={this.birth} mail={this.mail} lName={this.nom} fName={this.prenom}/>

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
