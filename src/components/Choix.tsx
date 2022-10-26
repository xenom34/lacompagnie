import React, {useEffect, useRef} from 'react';
import '../style/App.css';
import 'reactjs-popup/dist/index.css';
import {AnyAaaaRecord} from "dns";
import {MDCTextField, MDCTextFieldIcon} from '@material/textfield';
import {MDCMenu} from "@material/menu";
import DropdownChoice from "./DropDownChoice";
import CalendarChoice from "./CalendarChoice";
import NumbersChoice from "./NumbersChoice";
import {data} from "autoprefixer";
import TextField from "./TextField";
import {MDCDialog} from "@material/dialog";



//import reactimg from "../img/reactimg.jpeg"

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

    constructor(props:any) {
        super(props);
        fetch("http://localhost:3456/compagnie/reqCabines").then((data) =>
            data.json()).then((response) =>{this.cabines = response.classes})
    }

    componentDidMount() {
        // @ts-ignore
        //this.dialog.open()
    }

    InscriptionButton= () =>{
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

        fetch("https://api.altair-studios.fr:4318/compagnie/auth/register", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));


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
    }
    setDateN = (changes : String) => {
        this.DateN = changes;
    }
    onOpen = (event:any) =>{
        alert('jhugyjfhcgjkiop')
    }

    render = () => {
        console.log(this.cabines)
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
                    <TextField setter={this.setMdp} title={"Mot de passe"} MDP={true} />
                    </div>
                <div className={"labelSearch container"}>
                <TextField setter={this.setConfirmationMdp} title={"Confirmation du MDP"} MDP={true} />
                </div>
                <button onClick={this.onOpen} style={{borderRadius:"10px", width:"fit-content",right:0}} className="mdc-button mdc-button--raised mdc-button--leading">
                    <span className="mdc-button__ripple"></span>
                    <i className="material-icons mdc-button__icon" aria-hidden="true"></i>
                    <span className="mdc-button__label">Validation</span>
                </button>

            </div>
        );
    }
}

export default Choix;