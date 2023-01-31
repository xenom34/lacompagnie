import React from 'react';
import photoOne from "../img/photo-1.jpg"
import video from "../img/bg.mp4"

interface WebsiteSliderProps {}

const WebsiteSlider: React.FC<WebsiteSliderProps> = () => {
    return (
        <div className="website-slider">
            <div className="website-slider-inner">
                <div id="home" className="website-slider-item" data-navbar-slide="navbar-dark">
                    <div className="overlay overlay-global">
                        <div className="overlay-inner bg-cover bg-image-holder filter-grayscale">
                            <img src={photoOne} alt="" />
                        </div>
                        <div className="overlay-inner overlay-video">
                            <video autoPlay muted loop>
                                <source src={video} type="video/mp4" />
                            </video>
                        </div>
                        <div className="overlay-inner bg-dark opacity-50"></div>
                    </div>
                    <div className="website-slider-item-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-9 mx-auto text-center text-white">
                                    <h1 className="display-4 mb-5">We build digital experiences</h1>
                                    <p className="lead mb-7">
                                        A beautiful and easy to use template that lets you create the perfect website for your future agency or business.
                                    </p>
                                    <button type="button" className="btn btn-white d-block d-md-inline-block w-100 w-md-auto mb-3 mb-md-0" data-toggle="modal" data-target="#subscribeModal">
                                        Subscribe
                                    </button>
                                    <a href="#about" className="btn btn-soft-white scrollto d-block d-md-inline-block w-100 w-md-auto ml-md-3">
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebsiteSlider;
