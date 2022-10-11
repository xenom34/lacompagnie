import React, {useCallback} from "react";


class Global_Overlay extends React.Component<any, any>{
    render() {
        return (
            <div className="overlay overlay-global">
                <div className="overlay-inner slide-background"></div>
                <div className="overlay-inner bg-dark opacity-70"></div>
            </div>

        )
    }

}
export default Global_Overlay;