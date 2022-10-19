import React, { useState } from 'react'
import DayNightToggle from 'react-day-and-night-toggle'

const ModeNuitConst = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    return (
        <DayNightToggle
            onChange={() => setIsDarkMode(!isDarkMode)}
            checked={isDarkMode}
        />
    )
}
class ModeNuitClass extends React.Component{

    constructor(props:any){
        super(props);
        this.state = {
            isDarkMode : false
        }

    }

    componentDidMount() {
        this.setState({
            black:true
        })
    }

    changeColor(){
        let color = this.state;
        this.setState({black: color})
        return color
    }

    render(){
        let color = this.state;
        let btn_class = color ? "blackButton" : "whiteButton";

        return (
            <div>
                <button className={btn_class} onClick={() => this.setState({isDarkMode :this.changeColor.bind(this)})}>
                    Button
                </button>
            </div>

        )
    }
}

export default ModeNuit;