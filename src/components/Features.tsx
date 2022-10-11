import React, {Fragment, useCallback} from "react";


class Features extends React.Component<any, any>{
    render() {
        return (
            <div className="website-slider-item bg-transparent" id="features" data-navbar-slide="navbar-dark">
                <div className="website-slider-item-inner">

                    <div className="container text-white">
                        <div className="row">
                            <div className="col-12 col-xl-5 mb-7 mb-xl-0">
                                <h2 className="h1">Features</h2>
                                <div className="divider bg-white"></div>
                                <p>Fusce massa dolor, mattis sed ultrices ut, placerat ut leo. Donec sed fringilla lectus, non vulputate orci. Integer id libero euismod, interdum ligula vel, porttitor magna. Sed euismod maximus finibus. Pellentesque tempus ultricies nisi at cursus.</p>
                            </div>
                            <div className="col-12 col-xl-6 offset-xl-1">
                                <div className="row">

                                    <div className="col-md-6 col-sm-6 mb-7">
                                        <div className="icon-7x mb-4">
                                            <i className="ti-timer"></i>
                                        </div>
                                        <h3 className="h5 mb-0">Launch Quickly</h3>
                                    </div>

                                    <div className="col-md-6 col-sm-6 mb-7">
                                        <div className="micon-7x mb-4">
                                            <i className="ti-brush-alt"></i>
                                        </div>
                                        <h3 className="h5 mb-0">Stylish Design</h3>
                                    </div>

                                    <div className="col-md-6 col-sm-6 mb-7">
                                        <div className="icon-7x mb-4">
                                            <i className="ti-book"></i>
                                        </div>
                                        <h3 className="h5 mb-0">Well Documented</h3>
                                    </div>

                                    <div className="col-md-6 col-sm-6 mb-7">
                                        <div className="icon-7x mb-4">
                                            <i className="ti-layers"></i>
                                        </div>
                                        <h3 className="h5 mb-0">Multiple Styles</h3>
                                    </div>

                                    <div className="col-md-6 col-sm-6 mb-7 mb-sm-0">
                                        <div className="icon-7x mb-4">
                                            <i className="ti-settings"></i>
                                        </div>
                                        <h3 className="h5 mb-0">Fully Customizable</h3>
                                    </div>

                                    <div className="col-md-6 col-sm-6">
                                        <div className="icon-7x mb-4">
                                            <i className="ti-headphone-alt"></i>
                                        </div>
                                        <h3 className="h5 mb-0">Friendly Support</h3>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Features;