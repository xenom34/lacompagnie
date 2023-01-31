import React, { useState } from "react";

function SubscribeModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#subscribeModal" onClick={() => setModalIsOpen(true)}>
                Subscribe
            </button>

            {modalIsOpen && (
                <div className="modal fade" id="subscribeModal" role="dialog" aria-labelledby="subscribeNewsletter">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content hover-parent">
                            <button type="button" className="btn btn-sm btn-icon btn-primary position-absolute top-0 right-0 mt-n3 mr-n3 zindex-1" data-dismiss="modal" onClick={() => setModalIsOpen(false)}>
                                <i className="fas fa-times btn-icon-inner"></i>
                            </button>
                            <div className="modal-body py-5 py-lg-8 px-5 px-lg-8 text-center">
                                <h2 id="subscribeNewsletter" className="mb-4">Subscribe<br /> to our newsletter</h2>
                                <p className="mb-7">
                                    Signup for our weekly newsletter to get the latest news, updates and amazing offers delivered directly in
                                    your inbox.
                                </p>
                                <div className="subscribe-form">
                                    <form id="sf" name="sf" action="include/subscribe.php" method="post">
                                        <div className="form-process"></div>
                                        <div className="form-group">
                                            <input type="email" id="sf-email" name="sf-email" placeholder="Enter Your Email Address" className="form-control required" />
                                        </div>
                                        <input type="text" id="sf-botcheck" name="sf-botcheck" value="" className="form-control d-none" />
                                        <button className="btn btn-primary btn-block" type="submit" id="sf-submit" name="sf-submit">
                                            Notify Me
                                        </button>
                                    </form>
                                    <div className="subscribe-form-result"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SubscribeModal;
