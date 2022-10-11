import React, {useCallback} from "react";


class Features extends React.Component<any, any>{
    render() {
        return (

            <div className="website-slider-item bg-transparent" id="contact" data-navbar-slide="navbar-dark">
                <div className="website-slider-item-inner">

                    <div className="container text-center text-white">
                        <div className="row">
                            <div className="col-12 col-lg-9 mx-lg-auto">
                                <h2 className="h1">Contact Us</h2>
                                <div className="divider bg-white mx-auto"></div>
                                <p className="mb-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <div className="contact-form text-left">
                                    <form className="mb-0" id="cf" name="cf" action="include/sendemail.php" method="post" autoComplete="off">
                                        <div className="form-row">

                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" id="cf-name" name="cf-name" placeholder="Enter your name" className="form-control form-control-soft-light required"/>
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <input type="email" id="cf-email" name="cf-email" placeholder="Enter your email address" className="form-control form-control-soft-light required"/>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="text" id="cf-subject" name="cf-subject" placeholder="Subject (Optional)" className="form-control form-control-soft-light"/>
                                                </div>
                                            </div>

                                            <div className="col-12 mb-4">
                                                <div className="form-group">
                                                    <textarea name="cf-message" id="cf-message" placeholder="Here goes your message" className="form-control form-control-soft-light required" rows={7}/>
                                                </div>
                                            </div>

                                            <div className="col-12 d-none">
                                                <input type="text" id="cf-botcheck" name="cf-botcheck" value=""/>
                                            </div>

                                            <input type="hidden" name="prefix" value="cf-"/>

                                                <div className="col-12 text-center">
                                                    <button className="btn btn-white" type="submit" id="cf-submit" name="cf-submit">Send Message</button>
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


    )
    }
}