import React, { useState } from 'react'
import DayNightToggle from 'react-day-and-night-toggle'

class ModeNuit extends React.Component<any,any>{

    constructor(props:any){
        super(props);
        this.state = {
            isDarkMode : false
        }
        this.changeColor.bind(this)

    }

    changeColor= () =>{
        let color = !this.state.isDarkMode;
        this.setState({isDarkMode: color})
        return color
    }

    render = () =>{
        let color = this.state;
        let btn_class = color ? "blackButton" : "whiteButton";

        return (
            <div>
                <DayNightToggle
                    onChange={() => this.setState({isDarkMode :this.changeColor()})}
                    checked={this.state.isDarkMode}
                />
            </div>

        )
    }
}

export default ModeNuit;