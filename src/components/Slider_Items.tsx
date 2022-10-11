import React, {useCallback} from "react";


class Slider_Items extends React.Component<any, any>{
    render() {
        return (
            <div className="website-slider-item bg-transparent" id="home" data-navbar-slide="navbar-dark">
                <div className="website-slider-item-inner">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-xl-9 mx-auto text-center text-white">

                                <h1 className="display-4 mb-5">We bulid digital experiences</h1>
                                <p className="lead mb-7">A beautiful and easy to use template that lets you create the
                                    perfect website for your future agency or business.</p>
                                <button type="button"
                                        className="btn btn-white d-block d-md-inline-block w-100 w-md-auto mb-3 mb-md-0"
                                        data-toggle="modal" data-target="#subscribeModal">Subscribe
                                </button>
                                <a href="#about"
                                   className="btn btn-soft-white scrollto d-block d-md-inline-block w-100 w-md-auto ml-md-3">Learn
                                    more</a>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }

}
export default Slider_Items;