import React from 'react';
import '../style/App.css';
import 'reactjs-popup/dist/index.css';
import Search from "./Search";

class BoxHead extends React.Component<any, any> {
    render() {
        return (
            <div className="Recherche">
                <Search/>
            </div>

        );
    }
}

export default BoxHead;
