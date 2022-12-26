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


//import reactimg from "../img/reactimg.jpeg"

class Paiement extends React.Component<any, any>{
    private menu: any;
    private cabines: Array<Object> =[];
    private card: String | undefined;
    private expire: String | undefined;
    private cardName: String | undefined;
    private cvc: String | undefined;
    constructor(props:any) {
        super(props);
        //this.cabines = ["Economy","Premium Economy","Business","Première"];
        fetch("http://localhost:3456/compagnie/reqCabines").then((data) =>
            data.json()
        ).then((response) =>{this.cabines = response.classes})
    }

    setCard = (changes : any) => {
        this.card = changes;
    }

    setExpire = (changes : any) => {
        this.expire = changes;
    }
    setCardName = (changes : any) => {
        this.cardName = changes;
    }

    setCVC = (changes : any) => {
        this.cvc = changes;
    }
    render = () => {
        console.log(this.cabines)
        return (
            <div className="mdc-card">
                <h1 id={"searchTitle"}>💳    Paiement</h1>
                <div className={"labelSearch container"}>
                    <TextField setter={this.setCardName} title={"Nom du titulaire"} restriction={true} mandatory={true}/>
                    <TextField setter={this.setCard} title={"Numéro carte"} restriction={true} card={true}/>
                    <TextField setter={this.setExpire} title={"Expire le"} restriction={true} month={true}/>
                    <TextField setter={this.setCVC} title={"CVC"} restriction={true} cvc={true}/>
                </div>
                <button style={{borderRadius:"10px", width:"fit-content",right:0}} className="mdc-button mdc-button--raised mdc-button--leading">
                    <span className="mdc-button__ripple"></span>
                    <i className="material-icons mdc-button__icon" aria-hidden="true">payment</i>
                    <span className="mdc-button__label">Valider le paiement</span>
                </button>
            </div>
        );
    }
}

export default Paiement;
