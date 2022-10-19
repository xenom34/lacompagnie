import React, {useCallback} from "react";


class Slider_Items_Home extends React.Component<any, any>{
    render() {
        return (
            <div className="website-slider">
            <div className="website-slider-inner">


                <div id="home" className="website-slider-item" >
                    <div className="overlay overlay-global">
                        <div className="overlay-inner overlay-video">
                            <video autoPlay muted loop>
                                <source src="https://xenom.altair-studios.fr/video.mp4" type="video/mp4"/>
                            </video>
                        </div>
                        <div className="overlay-inner bg-dark opacity-70"></div>
                    </div>
                    <div className="website-slider-item-inner">

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-9 mx-auto text-center text-white">

                                    <h1 className="display-4 mb-5">Est-ce que vous voulez VOYAGER ?</h1>
                                    <p className="lead mb-7">Envie de faire une escale en amoureux, seul, en famille ou entre amis ?</p>
                                    <button type="button"
                                            className="btn btn-white d-block d-md-inline-block w-100 w-md-auto mb-3 mb-md-0"
                                            data-toggle="modal" data-target="#subscribeModal">Réservation
                                    </button>
                                    <a href="#about"
                                       className="btn btn-soft-white scrollto d-block d-md-inline-block w-100 w-md-auto ml-md-3"> Disponibilité
                                        </a>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div id="about" className="website-slider-item" data-navbar-slide="navbar-light">
                    <div className="website-slider-item-inner">

                        <div className="container text-center">
                            <h2 className="h1">Les disponibilités</h2>
                            <div className="divider bg-primary mx-auto"></div>
                            <div className="row">
                                <div className="col-12 col-lg-10 mx-auto">

                                    <div className="d-table mx-auto mb-7">
                                        <div className="nav nav-pills-modern nav-pills-modern-soft-dark justify-content-center rounded" id="about-tab" role="tablist">
                                            <a className="nav-link active" id="tab-forward-tab" data-toggle="pill" href="#tab-forward" role="tab" aria-controls="tab-forward" aria-selected="true">
                                                Où
                                            </a>
                                            <a className="nav-link" id="tab-together-tab" data-toggle="pill" href="#tab-together" role="tab" aria-controls="tab-together" aria-selected="false">
                                                Quand
                                            </a>
                                            <a className="nav-link" id="tab-tools-tab" data-toggle="pill" href="#tab-tools" role="tab" aria-controls="tab-tools" aria-selected="false">
                                                Prix
                                            </a>
                                        </div>
                                    </div>

                                    <div className="tab-content" id="tabContent">
                                        <div className="tab-pane fade show active" id="tab-forward" role="tabpanel" aria-labelledby="tab-forward-tab">

                                            <p> La Compagnie est une entreprise aérienne. </p>

                                        </div>
                                        <div className="tab-pane fade" id="tab-together" role="tabpanel" aria-labelledby="tab-together-tab">

                                            <p>Etiam in purus quis nulla placerat lobortis at quis sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse venenatis maximus rutrum. Vivamus malesuada augue sit amet nunc blandit, eget porttitor tellus tempus. Nulla sodales ante ut augue feugiat accumsan. Suspendisse sem dolor, hendrerit sit amet venenatis in, facilisis nec diam. Mauris feugiat magna ac tincidunt molestie. Nulla commodo purus mauris, a ultricies velit sagittis nec. Fusce iaculis mi ac libero rhoncus, sed mollis felis dapibus. Duis sed dolor at felis sodales aliquet. Praesent imperdiet nunc sed sapien semper, at accumsan arcu venenatis. Mauris id vestibulum mauris. Proin at luctus neque. Sed ac diam eu orci consequat iaculis. Integer at blandit magna. Donec condimentum sed nibh eget interdum. Aliquam in nulla metus.</p>

                                        </div>
                                        <div className="tab-pane fade" id="tab-tools" role="tabpanel" aria-labelledby="tab-tools-tab">

                                            <p>Morbi nec rutrum dui. Praesent placerat eleifend nisl eu accumsan. Quisque vulputate ante vel lorem iaculis cursus. Maecenas orci lorem, aliquet sed dui ut, venenatis convallis magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida dapibus diam. Nunc eget felis id enim commodo mattis. Pellentesque facilisis fringilla orci, a malesuada mauris vestibulum nec. Praesent bibendum ultricies feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam tempus ac sapien non viverra. Curabitur sed condimentum sapien, non pellentesque turpis. Proin risus diam, sagittis at facilisis quis, vestibulum a eros. Curabitur bibendum ultricies velit id finibus. Mauris ornare finibus turpis, ac commodo nisi convallis at. Nunc enim mauris, ultrices vitae amet.</p>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>





                <div id="solutions" className="website-slider-item" data-navbar-slide="navbar-light">
                    <div className="website-slider-item-inner">

                        <div className="container">
                            <div className="row mb-7 text-center">
                                <div className="col-12 col-lg-9 mx-lg-auto">
                                    <h2>A complete marketing solution</h2>
                                    <div className="divider bg-primary mx-auto"></div>
                                    <p>Mauris ut sem elementum, tristique velit sed, volutpat mauris. Ut interdum nibh sit amet imperdiet condimentum. Nulla sed tellus placerat, vehicula risus ac, sollicitudin quam.</p>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-12 col-lg-6 mb-8">
                                    <h4>We are</h4>
                                    <p className="mb-0">Quisque ultrices non velit sit amet consectetur. Cras turpis dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla rutrum arcu sed ligula malesuada, quis condimentum eros sollicitudin. Morbi eget lorem turpis. Maecenas id metus sapien. Aliquam et est turpis. Sed sit amet dui vel sapien sagittis pellentesque nec id sem.</p>
                                </div>

                                <div className="col-12 col-lg-6 mb-8">
                                    <h4>We practice</h4>
                                    <p className="mb-0">Quisque ultrices non velit sit amet consectetur. Cras turpis dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla rutrum arcu sed ligula malesuada, quis condimentum eros sollicitudin. Morbi eget lorem turpis. Maecenas id metus sapien. Aliquam et est turpis. Sed sit amet dui vel sapien sagittis pellentesque nec id sem.</p>
                                </div>

                                <div className="col-12 col-lg-6 mb-8 mb-lg-0">
                                    <h4>We deliver</h4>
                                    <p className="mb-0">Quisque ultrices non velit sit amet consectetur. Cras turpis dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla rutrum arcu sed ligula malesuada, quis condimentum eros sollicitudin. Morbi eget lorem turpis. Maecenas id metus sapien. Aliquam et est turpis. Sed sit amet dui vel sapien sagittis pellentesque nec id sem.</p>
                                </div>

                                <div className="col-12 col-lg-6">
                                    <h4>We create and innovate</h4>
                                    <p className="mb-0">Quisque ultrices non velit sit amet consectetur. Cras turpis dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla rutrum arcu sed ligula malesuada, quis condimentum eros sollicitudin. Morbi eget lorem turpis. Maecenas id metus sapien. Aliquam et est turpis. Sed sit amet dui vel sapien sagittis pellentesque nec id sem.</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>


                <div id="features" className="website-slider-item" data-navbar-slide="navbar-light">
                    <div className="website-slider-item-inner">

                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-xl-5 mb-7 mb-xl-0">
                                    <h2 className="h1">Features</h2>
                                    <div className="divider bg-primary"></div>
                                    <p>Fusce massa dolor, mattis sed ultrices ut, placerat ut leo. Donec sed fringilla lectus, non vulputate orci. Integer id libero euismod, interdum ligula vel, porttitor magna. Sed euismod maximus finibus. Pellentesque tempus ultricies nisi at cursus.</p>
                                </div>
                                <div className="col-12 col-xl-6 offset-xl-1">
                                    <div className="row">

                                        <div className="col-md-6 col-sm-6 mb-7">
                                            <div className="icon-7x text-primary mb-4">
                                                <i className="ti-timer"></i>
                                            </div>
                                            <h3 className="h5 mb-0">Launch Quickly</h3>
                                        </div>

                                        <div className="col-md-6 col-sm-6 mb-7">
                                            <div className="icon-7x text-primary mb-4">
                                                <i className="ti-brush-alt"></i>
                                            </div>
                                            <h3 className="h5 mb-0">Stylish Design</h3>
                                        </div>

                                        <div className="col-md-6 col-sm-6 mb-7">
                                            <div className="icon-7x text-primary mb-4">
                                                <i className="ti-book"></i>
                                            </div>
                                            <h3 className="h5 mb-0">Well Documented</h3>
                                        </div>

                                        <div className="col-md-6 col-sm-6 mb-7">
                                            <div className="icon-7x text-primary mb-4">
                                                <i className="ti-layers"></i>
                                            </div>
                                            <h3 className="h5 mb-0">Multiple Styles</h3>
                                        </div>

                                        <div className="col-md-6 col-sm-6 mb-7 mb-sm-0">
                                            <div className="icon-7x text-primary mb-4">
                                                <i className="ti-settings"></i>
                                            </div>
                                            <h3 className="h5 mb-0">Fully Customizable</h3>
                                        </div>

                                        <div className="col-md-6 col-sm-6">
                                            <div className="icon-7x text-primary mb-4">
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


                <div id="services" className="website-slider-item" data-navbar-slide="navbar-light">
                    <div className="website-slider-item-inner">

                        <div className="container">
                            <div className="row mb-7 text-center">
                                <div className="col-12 col-lg-9 mx-lg-auto">
                                    <h2 className="h1">Services</h2>
                                    <div className="divider bg-primary mx-auto"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                </div>
                            </div>
                            <div className="row my-n3 mx-sm-n3">

                                <div className="col-md-6 py-3 px-md-3">
                                    <div className="d-sm-flex">
                                        <div className="icon-7x flex-shrink-0 text-primary mb-3 mr-sm-5">
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
                                        <div className="icon-7x flex-shrink-0 text-primary mb-3 mr-sm-5">
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
                                        <div className="icon-7x flex-shrink-0 text-primary mb-3 mr-sm-5">
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
                                        <div className="icon-7x flex-shrink-0 text-primary mb-3 mr-sm-5">
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


                <div id="contact" className="website-slider-item" data-navbar-slide="navbar-light">
                    <div className="website-slider-item-inner">

                        <div className="container text-center">
                            <div className="row">
                                <div className="col-12 col-lg-9 mx-lg-auto">
                                    <h2 className="h1">Contact Us</h2>
                                    <div className="divider bg-primary mx-auto"></div>
                                    <p className="mb-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <div className="contact-form text-left">
                                        <form className="mb-0" id="cf" name="cf" action="include/sendemail.php" method="post" autoComplete={"off"}>
                                            <div className="form-row">

                                                <div className="col-12 col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" id="cf-name" name="cf-name" placeholder="Enter your name" className="form-control required"/>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6">
                                                    <div className="form-group">
                                                        <input type="email" id="cf-email" name="cf-email" placeholder="Enter your email address" className="form-control required"/>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <input type="text" id="cf-subject" name="cf-subject" placeholder="Subject (Optional)" className="form-control"/>
                                                    </div>
                                                </div>

                                                <div className="col-12 mb-4">
                                                    <div className="form-group">
                                                        <textarea name="cf-message" id="cf-message" placeholder="Here goes your message" className="form-control required" rows={7}></textarea>
                                                    </div>
                                                </div>

                                                <div className="col-12 d-none">
                                                    <input type="text" id="cf-botcheck" name="cf-botcheck" value=""/>
                                                </div>

                                                <input type="hidden" name="prefix" value="cf-"/>

                                                    <div className="col-12 text-center">
                                                        <button className="btn btn-primary" type="submit" id="cf-submit" name="cf-submit">Send Message</button>
                                                    </div>

                                            </div>
                                        </form>
                                        <div className="contact-form-result text-center"></div>
                                    </div>
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
export default Slider_Items_Home;