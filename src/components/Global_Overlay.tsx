import React, {useCallback} from "react";
import image from "../img/bg_profile.jpg"


class Global_Overlay extends React.Component<any, any>{
    render() {
        return (
            <div className="overlay overlay-global">
                <div className="overlay-inner bg-cover bg-image-holder" style={{backgroundImage : image}}>
                    <img src={image} alt=""/>
                </div>
                <div className="overlay-inner bg-dark opacity-70"></div>
            </div>
        )
    }

}
export default Global_Overlay;