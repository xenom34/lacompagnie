import React, {useCallback} from "react";


class Loader extends React.Component<any, any>{
    render() {
        return (
            <div className="loader bg-dark">
                <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>

        )
    }

}
export default Loader;