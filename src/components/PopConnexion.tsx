import React, {useEffect, useRef} from 'react';
import '../style/App.css';
import 'reactjs-popup/dist/index.css';
import {AnyAaaaRecord} from "dns";
import {MDCTextField, MDCTextFieldIcon} from '@material/textfield';
import {MDCMenu} from "@material/menu";
import DropdownChoice from "./DropdownChoice";
import CalendarChoice from "./CalendarChoice";
import NumbersChoice from "./NumbersChoice";
import {data} from "autoprefixer";
import TextField from "./TextField";
import {AsyncLocalStorage} from "async_hooks";



class PopConnexion extends React.Component<any, any>{
    private menu: any;
    private AM: any;
    private Mdp : any;


    InscriptionButton= async () =>{
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

            const response = await fetch("https://api.altair-studios.fr:4318/compagnie/auth/login",requestOptions)
            const {status, error, auth_token} = await response.json();
            console.log(auth_token)

            //response.headers.forEach((e) => console.log(e))

            //localStorage.setItem('token',token)
            //localStorage.getItem('token')

            if(error === undefined){
                alert("Vous êtes connectés !")
            }else{
                alert(error[0].errorType)
            }


        } catch (e) {
            console.log(e)
        }
    }

    setAm = (changes : any) => {
        this.AM = changes;
    }

    setMdp = (changes : any) => {
        this.Mdp = changes;
    }

    constructor(props:any) {
        super(props);

    }

    render = () => {

        return (
            <div id={"Connexion"} className="mdc-card">
                <h1 id={"searchTitle"}>✈️    Connexion</h1>

                <div className={"labelSearch container"}>
                    <TextField setter={this.setAm}title={"Adresse mail"} restriction={true}/>
                </div>
                <div className={"labelSearch container"}>
                    <TextField setter={this.setMdp} title={"Mot de passe"} MDP={true} />
                </div>
                <div id={"button_Connexion"} className={"labelSearch container"}>
                <button  onClick={this.InscriptionButton} style={{borderRadius:"10px", width:"fit-content",right:0}} className="mdc-button mdc-button--raised mdc-button--leading">
                    <span className="mdc-button__ripple"></span>
                    <i className="material-icons mdc-button__icon" aria-hidden="true"></i>
                    <span className="mdc-button__label">Validation</span>
                </button>
                </div>
            </div>
        );
    }
}

export default PopConnexion;