import React, {useEffect, useRef} from 'react';
import '../style/App.css';
import 'reactjs-popup/dist/index.css';
import {AnyAaaaRecord} from "dns";
import {MDCTextField, MDCTextFieldIcon} from '@material/textfield';
import {MDCMenu} from "@material/menu";
import DropdownChoice from "./DropdownChoice";
import CalendarChoice from "./CalendarChoice";
import NumbersChoice from "./NumbersChoice";


//import reactimg from "../img/reactimg.jpeg"

class Search extends React.Component<any, any>{
    private menu: any;
    private readonly cabines: Array<String>;

    constructor(props:any) {
        super(props);
        this.cabines = ["Economy","Premium Economy","Business","Première"];
    }

    render= () => {
        return (
            <div className="mdc-card">
                <h1 id={"searchTitle"}>✈️    Acheter un billet</h1>
                <div className={"labelSearch container"}>
                    <DropdownChoice title={"Depuis *"} content={this.cabines}/>
                    <DropdownChoice title={"Vers *"} content={this.cabines}/>
                    <CalendarChoice title={"Départ le *"}/>
                    <CalendarChoice title={"Arrivée le *"}/>
                    <NumbersChoice title={"Passagers"}/>
                    <DropdownChoice title={"Cabines"} content={this.cabines}/>
                </div>
                <button style={{borderRadius:"10px", width:"fit-content",right:0}} className="mdc-button mdc-button--raised mdc-button--leading">
                    <span className="mdc-button__ripple"></span>
                    <i className="material-icons mdc-button__icon" aria-hidden="true">search</i>
                    <span className="mdc-button__label">Rechercher un vol</span>
                </button>
            </div>
        );
    }
}

export default Search;
