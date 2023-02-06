import React from 'react';
import '../style/App.css';
import 'reactjs-popup/dist/index.css';
import TextField from "./TextField";
import CalendarChoice from "./CalendarChoice";

class Profil extends React.Component<any, any> {
    state = {isLoading: true}
    Change = () => {
        const {isLoading} = this.state;
        this.setState({isLoading: false})
    }

    render() {
        const {isLoading} = this.state;
        console.log("isLoading :"+isLoading)
        console.log("FNAME :"+this.props.fName)

        return (

            <div className={"AffichageParametre"}>
                {
                    !isLoading ? <div></div> :
                        <div id={"parametre"} className="mdc-card mdc-card--outlined">

                            <div className="mdc-card 1">
        <span className="mdc-list-item__text">
          <TextField title={"Nom de famille :"} valeur={this.props.lName}> </TextField>
        </span>
                            </div>

                            <div className="mdc-card 2">
        <span className="mdc-list-item__text">
          <TextField title={"Prénom :"} valeur={this.props.fName}> </TextField>
        </span>
                            </div>

                            <div className="mdc-card 4">
        <span className="mdc-list-item__text">
          <TextField title={"Adresse Mail :"} valeur={this.props.mail}> </TextField>
        </span>
                            </div>
                        </div>}


            </div>

        );
    }
}

export default Profil;

