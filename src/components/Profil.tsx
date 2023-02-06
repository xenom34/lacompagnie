import React from 'react';
import '../style/App.css';
import 'reactjs-popup/dist/index.css';

class Profil extends React.Component<any, any>{
    Change = () => {
        const {isLoading} = this.state;
        this.setState({isLoading : true})
    }

    render() {
        return (
        <div id = {"profil"}>
            <div>
                <div>
                    <h4>Nom de famille :</h4>
                   <div>
                       <h4>Prénom(s) :</h4>
                       <div>
                           <h4>Adresse Mail :</h4>
                           <div>
                               <h4>Mot de Passe :</h4>
                               <div>
                                   <button>Modifier</button>
                               </div>
                           </div>
                       </div>
                   </div>
                </div>
            </div>

        </div>
        );
    }
}
export default Profil;

