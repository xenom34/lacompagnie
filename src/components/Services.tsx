import React, {useCallback} from "react";


class Services extends React.Component<any, any>{
    render() {
        return (
<div className="website-slider-item bg-transparent" id="services" data-navbar-slide="navbar-dark">
    <div className="website-slider-item-inner">

        <div className="container text-white">
            <div className="row mb-7 text-center">
                <div className="col-12 col-lg-9 mx-lg-auto">
                    <h2 className="h1">Services</h2>
                    <div className="divider bg-white mx-auto"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>
            <div className="row my-n3 mx-sm-n3">

                <div className="col-md-6 py-3 px-md-3">
                    <div className="d-sm-flex">
                        <div className="icon-7x flex-shrink-0 mb-3 mr-sm-5">
                            <i className="ti-timer"></i>
                        </div>
                        <div>
                            <h3 className="h4 mb-2">Launch Quickly</h3>
                            <p>Quisque ultrices non velit sit amet consectetur. Cras turpis dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla rutrum arcu sed ligula malesuada, quis condimentum eros sollicitudin.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 py-3 px-md-3">
                    <div className="d-sm-flex">
                        <div className="icon-7x flex-shrink-0 mb-3 mr-sm-5">
                            <i className="ti-brush-alt"></i>
                        </div>
                        <div>
                            <h3 className="h4 mb-2">Stylish Design</h3>
                            <p>Quisque ultrices non velit sit amet consectetur. Cras turpis dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla rutrum arcu sed ligula malesuada, quis condimentum eros sollicitudin.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 py-3 px-md-3">
                    <div className="d-sm-flex">
                        <div className="icon-7x flex-shrink-0 mb-3 mr-sm-5">
                            <i className="ti-book"></i>
                        </div>
                        <div>
                            <h3 className="h4 mb-2">Well Documented</h3>
                            <p>Quisque ultrices non velit sit amet consectetur. Cras turpis dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla rutrum arcu sed ligula malesuada, quis condimentum eros sollicitudin.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 py-3 px-md-3">
                    <div className="d-sm-flex">
                        <div className="icon-7x flex-shrink-0 mb-3 mr-sm-5">
                            <i className="ti-settings"></i>
                        </div>
                        <div>
                            <h3 className="h4 mb-2">Fully Customizable</h3>
                            <p>Quisque ultrices non velit sit amet consectetur. Cras turpis dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla rutrum arcu sed ligula malesuada, quis condimentum eros sollicitudin.</p>
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
export default Services;