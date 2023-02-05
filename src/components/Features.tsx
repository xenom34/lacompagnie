import React, {Fragment, useCallback} from "react";
import TextField from "./TextField";

class Features extends React.Component<any, any>{
    private menu: any;
    private cabines: Array<Object> =[];
    private card: String | undefined;
    private expire: String | undefined;
    private cardName: String | undefined;
    private cvc: String | undefined;

    constructor(props:any) {
        super(props);
        //this.cabines = ["Economy","Premium Economy","Business","Première"];

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

    render() {
        return (
            <div className="website-slider-item bg-transparent" id="features" data-navbar-slide="navbar-dark">
                <div className="website-slider-item-inner">

                    <div className="container text-white">
                        <div className="row">
                            <div className="col-12 col-xl-5 mb-7 mb-xl-0">
                                <h2 className="h1">💳     Paiement</h2>

                            </div>
                            <div className={"labelSearch container"}>
                                <TextField setter={this.setCardName} title={"Nom du titulaire"} restriction={true} mandatory={true}/>
                                <TextField setter={this.setCard} title={"Numéro carte"} restriction={true} card={true}/>
                                <TextField setter={this.setExpire} title={"Expire le"} restriction={true} month={true}/>
                                <TextField setter={this.setCVC} title={"CVC"} restriction={true} cvc={true}/>
                            </div>
                            <button  style={{borderRadius:"10px", width:"fit-content",right:0}} className="mdc-button mdc-button--raised mdc-button--leading">
                                <span className="mdc-button__ripple"></span>
                                <i className="material-icons mdc-button__icon" aria-hidden="true"></i>
                                <span className="mdc-button__label">payment</span>
                            </button>



                                </div>
                            </div>
                        </div>
                    </div>


        )
    }
}
export default Features;