import React, {useEffect, useRef} from 'react';
import '../style/App.css';
import 'reactjs-popup/dist/index.css';
import TextField from "./TextField";
import Navigation from "./Navigation";
import {UNSAFE_NavigationContext} from "react-router-dom";

class PopConnexion extends React.Component<any, any> {
    private menu: any;
    private AM: any;
    private Mdp: any;
    private auth_token: any;
    private id: any;

    InscriptionButton = async () => {
        try {

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "email": this.AM,
                "password": this.Mdp,
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw
            };

            const response = await fetch("https://api.altair-studios.fr:4318/compagnie/auth/login", requestOptions)
            const {status, error, auth_token,_id} = await response.json();
            //const value = response.headers.get("auth_token");
            this.id = _id
            this.auth_token = auth_token;
            console.log(raw);

            if (error === undefined) {
                alert("Vous êtes connectés !")
                this.IsConnected(this.auth_token)

            } else {
                alert(error[0].errorType)
            }

        } catch (e) {
            console.log(e)
        }
    }

    IsConnected = (event:any) => {
        this.props.connected(this.auth_token, this.id);
    }

    setAm = (changes: any) => {
        this.AM = changes;
    }

    setMdp = (changes: any) => {
        this.Mdp = changes;
    }

    constructor(props: any) {
        super(props);

    }

    render = () => {

        return (
            <div id={"Connexion"} className="mdc-card">
                <h1 id={"searchTitle"}></h1>

                <div className={"labelSearch container"}>
                    <TextField setter={this.setAm} title={"Adresse mail"} restriction={true}/>
                </div>
                <div className={"labelSearch container"}>
                    <TextField setter={this.setMdp} title={"Mot de passe"} MDP={true}/>
                </div>
                <div id={"button_Connexion"} className={"labelSearch container"}>
                    <button onClick={this.InscriptionButton}
                            style={{borderRadius: "10px", width: "fit-content", right: 0}}
                            className="mdc-button mdc-button--raised mdc-button--leading">
                        <span className="mdc-button__ripple"></span>
                        <i className="material-icons mdc-button__icon" aria-hidden="true"></i>
                        <span  className="mdc-button__label">Validation</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default PopConnexion;