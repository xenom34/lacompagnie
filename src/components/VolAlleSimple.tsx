import React from 'react';
import '../style/App.css';
import 'reactjs-popup/dist/index.css';
import {MDCRipple} from '@material/ripple';
import {forEach} from "lodash";

class VolAlleSimple extends React.Component<any, any>{

    componentDidMount() {
        const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
        const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
            return new MDCRipple(el);
        });
    }


    render() {
        return (

            <div className={"PapaAlleSimple"}>
                <div id={"AlleSimple"} className="mdc-card mdc-card--outlined">


                    <div className="mdc-card 1">
        <span className="mdc-list-item__text">
          <span className="mdc-list-item__primary-text">Aéoroport de départ : {this.props.depart}</span>
          <span className="mdc-list-item__secondary-text">Code IATA: XYZ</span>
        </span>
                    </div>

                    <div className="mdc-card 2">
                        <span className="mdc-list-item__text">
          <span className="mdc-list-item__primary-text">Aéroport d'arrivée: {this.props.arrivee}</span>
          <span className="mdc-list-item__secondary-text">Code IATA: ABC</span>
        </span>
                    </div>

                    <div className="mdc-card 3">

        <span className="mdc-list-item__text">
          <span className="mdc-list-item__primary-text">Durée du vol: {this.props.duree}</span>
        </span>
                    </div>
                    <div className="mdc-card 4">

        <span className="mdc-list-item__text">
          <span className="mdc-list-item__primary-text">Heure de départ: {this.props.heureDepart}</span>
          <span className="mdc-list-item__secondary-text">Heure d'arrivée: {this.props.heureArrivee}</span>
        </span>
                    </div>
                    <div className="mdc-card 5 ">

        <span className="mdc-list-item__text">

          <span className="mdc-list-item__primary-text">Modèle d'avion: {this.props.modeleAvion}</span>
        </span>
                    </div>
                    <div className="mdc-card 6">

                        <button id={"button_Reserve"} className="mdc-button mdc-button--raised">
                            Réserver
                        </button>
                        <span className="mdc-button__label">Prix: {this.props.prixBillet} € </span>

                    </div>

                </div>
            </div>




        );


    }

}

export default VolAlleSimple;