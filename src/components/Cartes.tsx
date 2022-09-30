import React from 'react';
import '../style/App.css';
import 'reactjs-popup/dist/index.css';
import {AnyAaaaRecord} from "dns";

//import reactimg from "../img/reactimg.jpeg"

class Cartes extends React.Component<any, any>{
    private card: React.RefObject<any>;

    constructor(props:any) {
        super(props);
        this.card = React.createRef();
    }

    componentDidMount() {
    }

    cardClick = () =>{
        console.log("AHAHH")
        this.card.current.style.left = this.card.current.style.left+""+20+"px";
    }

    render() {
        return (
            <div>
                <div ref={this.card} id="card" onClick={this.cardClick}/>
            </div>
        );
    }
}

export default Cartes;
