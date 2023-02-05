import React from 'react';
import '../style/App.css';
import 'reactjs-popup/dist/index.css';
import PopConnexion from "./PopConnexion";
import PopInscription from "./PopInscription";
import ParentVols from "./ParentVols";



class Pop extends React.Component<any, any>{
    state = {isLoading : true}

    ClickInscriptionButton = () => {
        this.setState({isLoading:true})
    }
    ClickConnexionButton = () => {
        this.setState({isLoading:false})
    }

    render() {
        const {isLoading} = this.state;
        return (
            <div id={"menuConnexion"} className="pos-f-t">
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                        {isLoading ?
                            <div className="bg-dark p-4"><button onClick={this.ClickConnexionButton} className="text-white">Connexion</button> </div> :
                            <div className="bg-dark p-4"><button onClick={this.ClickInscriptionButton}  className="text-muted">Inscription</button></div>

                        }
                    </div>
                </div>
                <nav className="navbar navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>
        );
    }
}
export default Pop;

