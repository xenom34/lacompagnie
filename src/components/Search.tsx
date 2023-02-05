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
import ParentVols from "./ParentVols";
import {forEach} from "lodash";
import VolAlleSimple from "./VolAlleSimple";

class Search extends React.Component<any, any>{
    private menu: any;
    private cabines: Array<Object> =[];
    private AA: any;
    private AD : any;
    private DD: any;
    private R : any;
    private P: any;
    private C : any;
    private test: any = "";
    static conteur = 0;
    private tableau = new Array<Object>;

    state = {isLoading : true}



    Souffrance = async (event: any) => {
        const {isLoading} = this.state;
        this.setState({isLoading : true})

            try {

                var requestOptions = {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'}
                };

                if (this.C === "Economy") {
                    this.C = "e";
                } else if (this.C === "Premium Economy") {
                    this.C = "p";

                } else if (this.C === "Business") {
                    this.C = "b";

                } else {
                    this.C = "f";

                }
                let query = "https://api.altair-studios.fr:4318/compagnie/reqFlights?departureDate=" + this.R + "&departureAirport=" + this.AA + "&arrivalAirport=" + this.AD + "&nbPassengers=" + this.P + "&cabin=" + this.C + "&askToken" + this.test.askToken;

                const response = await fetch(query, requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        this.test = result;

                        this.setState({isLoading: false})


                    })
                    .catch(error => console.log('error', error));


            } catch (e) {
                console.log(e)
            }

    }

    ClickInscriptionButton=async () => {
        await this.InscriptionButton();
    }

    InscriptionButton= async () =>{
        try {

            var requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            };

            if(this.C === "Economy"){
                this.C = "e";
            }else if(this.C ==="Premium Economy"){
                this.C = "p";

            }else if(this.C==="Business"){
                this.C = "b";

            }else{
                this.C="f";

            }
            let query = "https://api.altair-studios.fr:4318/compagnie/reqFlights?departureDate="+ this.DD +"&departureAirport="+this.AD+"&arrivalAirport="+this.AA + "&nbPassengers="+this.P+"&cabin="+this.C;

            const response = await fetch(query,requestOptions)
                .then(response => response.json())
                .then(result => {this.test = result; this.setState({isLoading:false} );} )
                .catch(error => console.log('error', error));


        } catch (e) {
            console.log(e)
        }
    }



    EnvoieRéservationAPI= async (event:any) =>{

        try {

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "flight": this.props.flight,
                "passengers": this.props.nbPassenger,
                "class": this.props.classeBillet

            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw

            };

            let query = "https://api.altair-studios.fr:4318/compagnie/trip/"+ this.test.askToken +"/submitBooking";
            const response = await fetch(query,requestOptions)
            this.props.folie(response);

        } catch (e) {
            console.log(e)
        }
    }


    setAskToken = (changes : any) => {
        let amTheToken = changes;

        return this.EnvoieRéservationAPI(amTheToken);
    }


    setAD = (changes : any) => {
        this.AD = changes;
        console.log(this.AD)
    }

    setAA = (changes : any) => {
        this.AA = changes;
        console.log(this.AA)
    }
    setDD = (changes : any) => {
        this.DD = changes;
        console.log(this.DD)
    }

    setR = (changes : any) => {
        this.R = changes;
        console.log(this.R)
    }
    setP = (changes : any) => {
        this.P = changes;
        console.log(this.P)
    }

    setC = (changes : any) => {
        this.C = changes;
        console.log(this.C)
    }


    render = () => {
        const {isLoading} = this.state;

        return (
            <div className="title">
                <h1 id={"searchTitle"}>✈️    Trouver un billet</h1>
                <div className={"labelSearch_container"}>
                    <DropdownChoice title={"Depuis *"} setter={this.setAD} cabines ={false} />
                    <DropdownChoice title={"Vers *"} setter={this.setAA} cabines={false} />
                    <CalendarChoice title={"Date Allé *"}setter={this.setDD}/>
                    <CalendarChoice title={"Date de Retour *"}setter={this.setR}/>
                    <NumbersChoice title={"Passagers"}setter={this.setP}/>
                    <DropdownChoice title={"Cabines"} setter={this.setC}cabines={true} />
                </div>
                <button style={{borderRadius:"10px", width:"fit-content",right:0}} className="mdc-button mdc-button--raised mdc-button--leading">
                    <span className="mdc-button__ripple"></span>
                    <i className="material-icons mdc-button__icon" aria-hidden="true"></i>
                    <span onClick={this.ClickInscriptionButton} className="mdc-button__label">Rechercher un vol</span>
                </button>

                {isLoading ? <div></div> : <ParentVols desolation={this.Souffrance} lucile={this.test === undefined ? {}:this.test} token={this.test.askToken} />}

            </div>
        );
    }

}

export default Search;