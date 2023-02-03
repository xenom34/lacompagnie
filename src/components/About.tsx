import React from 'react';
import '../style/App.css';
import 'reactjs-popup/dist/index.css';


interface WebsiteSliderProps {}

const WebsiteSliderAbout: React.FC<WebsiteSliderProps> = () => {
    return (

    <div id="about" className="website-slider-item" data-navbar-slide="navbar-dark">
        <div className="website-slider-item-inner">
            <div className="container text-center"><h2 className="h1">About Us</h2>
                <div className="divider bg-primary mx-auto"></div>

                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto">
                        <div className="d-table mx-auto mb-7">
                            <div
                                className="nav nav-pills-modern nav-pills-modern-soft-dark justify-content-center rounded"
                                id="about-tab" role="tablist"><a className="nav-link active" id="tab-forward-tab"
                                                                 data-toggle="pill" href="#tab-forward" role="tab"
                                                                 aria-controls="tab-forward"
                                                                 aria-selected="true"> Forward </a> <a
                                className="nav-link" id="tab-together-tab" data-toggle="pill" href="#tab-together"
                                role="tab" aria-controls="tab-together" aria-selected="false"> Together </a> <a
                                className="nav-link" id="tab-tools-tab" data-toggle="pill" href="#tab-tools" role="tab"
                                aria-controls="tab-tools" aria-selected="false"> Tools </a></div>
                        </div>
                        <div className="tab-content" id="tabContent">
                            <div className="tab-pane fade show active" id="tab-forward" role="tabpanel"
                                 aria-labelledby="tab-forward-tab"><p>Pellentesque </p></div>
                            <div className="tab-pane fade" id="tab-together" role="tabpanel"
                                 aria-labelledby="tab-together-tab"><p>Etiam i</p>
                            </div>
                            <div className="tab-pane fade" id="tab-tools" role="tabpanel"
                                 aria-labelledby="tab-tools-tab"><p>Morbi </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};


export default WebsiteSliderAbout;
