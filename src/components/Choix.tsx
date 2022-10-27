import React, {useEffect, useRef} from 'react';
import '../style/App.css';
import 'reactjs-popup/dist/index.css';
import CalendarChoice from "./CalendarChoice";
import TextField from "./TextField";
import {Simulate} from "react-dom/test-utils";


class Choix extends React.Component<any, any>{
    private menu: any;
    private cabines: Array<Object> =[];
    private name: String | undefined;
    private Fname: String | undefined;
    private Mdp: String | undefined;
    private AM: String | undefined;
    private ConfMdp: String | undefined;
    private DateN: String | undefined;
    private dialog: any | undefined;
    private boolMdp: boolean ;

    constructor(props:any) {
        super(props);
        this.boolMdp = false;
    }


    InscriptionButton= async () =>{
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "lName": this.name,
                "fName": this.Fname,
                "email": this.AM,
                "password": this.Mdp,
                "birtDate": this.DateN
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw

            };

            const response = await fetch("https://api.altair-studios.fr:4318/compagnie/auth/register", requestOptions)
            const {status, error} = await response.json();
            if(error === undefined){
                alert("Vous êtes inscrit !")
            }else{
                alert(error[0].errorType)
            }

        } catch (e) {
            console.log(e)
        }

    }

    setName = (changes:String) =>{
        this.name = changes
    }
    setFname = (changes:String) =>{
        this.Fname = changes
    }
    setMdp = (changes : String) => {
        this.Mdp = changes;

    }
    setAM = (changes : String) => {
        this.AM = changes;
    }
    setConfirmationMdp = (changes : String) => {
        this.ConfMdp = changes;
        this.TryMdps()

    }
    setDateN = (changes : String) => {
        this.DateN = changes;
    }

    TryMdps = () => {
        if(this.ConfMdp === this.Mdp){
            this.boolMdp = true;
        }else{
            this.boolMdp = false;
        }
        return this.boolMdp
    }

    render = () => {
        return (
            <div className="mdc-card">
                <h1 id={"searchTitle"}>✈️    Inscription</h1>
                <div className={"labelSearch container"}>
                    <TextField setter={this.setName} title={"Nom"} id={"Nom"}/>
                    <TextField setter={this.setFname} title={"Prénom"} />
                    <CalendarChoice setter={this.setDateN} title={"Date de Naissance"} restriction={false} />
                </div>
                <div className={"labelSearch container"}>
                    <TextField setter={this.setAM} title={"Adresse mail"} restriction={true}/>
                </div>
                    <div className={"labelSearch container"}>
                    <TextField setter={this.setMdp} title={"Mot de passe"} resMinMdp={true} MDP={true} />
                    </div>
                <div className={"labelSearch container"}>
                <TextField setter={this.setConfirmationMdp} resMinMdp={true} prout={this.TryMdps} title={"Confirmation du MDP"} confMdp={true} MDP={true} resBoolMdp = {this.boolMdp}/>
                </div>
                <button onClick={this.InscriptionButton} style={{borderRadius:"10px", width:"fit-content",right:0}} className="mdc-button mdc-button--raised mdc-button--leading">
                    <span className="mdc-button__ripple"></span>
                    <i className="material-icons mdc-button__icon" aria-hidden="true"></i>
                    <span className="mdc-button__label">Validation</span>
                </button>

            </div>
        );
    }
}

export default Choix;