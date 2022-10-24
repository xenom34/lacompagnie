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


//import reactimg from "../img/reactimg.jpeg"

class Choix extends React.Component<any, any>{
    private menu: any;
    private cabines: Array<Object> =[];

    constructor(props:any) {
        super(props);
        //this.cabines = ["Economy","Premium Economy","Business","Première"];
        fetch("http://localhost:3456/compagnie/reqCabines").then((data) =>
            data.json()
        ).then((response) =>{this.cabines = response.classes})
    }

    render = () => {
        console.log(this.cabines)
        return (
            <div className="mdc-card">
                <h1 id={"searchTitle"}>✈️    Inscription</h1>
                <div className={"labelSearch container"}>
                    <TextField title={"Nom"} id={"Nom"}/>
                    <TextField title={"Prénom"} />
                    <CalendarChoice title={"Date de Naissance"} restriction={false} />
                    <TextField title={"Adresse mail"} type ="email" id={"AM"}/>
                    <TextField title={"Mot de passe"} id={"MDP"}/>
                    <TextField title={"Confirmation du MDP"}id={"MDPC"} />
                </div>
                <button style={{borderRadius:"10px", width:"fit-content",right:0}} className="mdc-button mdc-button--raised mdc-button--leading">
                    <span className="mdc-button__ripple"></span>
                    <i className="material-icons mdc-button__icon" aria-hidden="true"></i>
                    <span className="mdc-button__label">Validation</span>
                </button>
            </div>
        );
    }
}

export default Choix;