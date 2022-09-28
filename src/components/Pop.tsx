import React from "react";
import Popup from "reactjs-popup";


class Pop extends React.Component<any, any> {


    constructor(props:any) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);


    }

    handleSubmit(event:any) {
        this.users.name = this.state.value;
        console.log(this.users)
        alert('SUBMIT: ' + this.users.name);
        event.preventDefault();
        //TODO:FAIRE CONNEXION SERVEUR
    }
    handleChange(event:any) {    this.setState({value: event.target.value});  }

    users = {
        "name" : "Michael",
        "score" : 1000
    }


    render() {
        return (
            <div className="pop" id="pop1">
                <Popup
                    trigger={<button id="ButtonAccueil" className="button"> CONNEXION </button>}
                    modal
                    nested
                >

                        <div className="modal">
                            <button className="close" onClick={close}>
                                &times;
                            </button>
                            <div className="header"> CONNEXION </div>
                            <div className="content">
                                {' '}
                                Que veux-tu faire ?
                                <br />
                                Te connecter ou partir ?
                            </div>
                            <div className="actions">
                                <Popup
                                    trigger={<button className="button"> Connexion </button>}
                                    position="top center"
                                    nested
                                >
                                    <form onSubmit={this.handleSubmit}>
                                        <label>
                                            Nom :
                                            <input value={this.state.value} onChange={this.handleChange}  type="text" name="name" />
                                        </label>

                                    </form>
                                    {this.state.value}
                                </Popup>
                                <button
                                    className="button"
                                    onClick={() => {
                                        console.log('modal closed ');
                                    }}
                                >
                                    close modal
                                </button>
                            </div>
                        </div>

                </Popup>
            </div>
        );

    }
}

export default Pop;