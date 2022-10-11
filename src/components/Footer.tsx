import React, {useCallback} from "react";


class Footer extends React.Component<any, any>{
    render() {
        return (
            <footer className="site-footer py-9 py-lg-12 bg-gray-800 text-gray-400">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto text-center">
                            <ul className="list-inline mb-8">

                                <li className="list-inline-item mx-0">
                                    <a className="btn btn-sm btn-icon btn-soft-secondary text-gray-400" href="#!" tabIndex={0}>
                                        <i className="fab fa-facebook-f btn-icon-inner"></i>
                                    </a>
                                </li>

                                <li className="list-inline-item mx-0">
                                    <a className="btn btn-sm btn-icon btn-soft-secondary text-gray-400" href="#!" tabIndex={0}>
                                        <i className="fab fa-twitter btn-icon-inner"></i>
                                    </a>
                                </li>

                                <li className="list-inline-item mx-0">
                                    <a className="btn btn-sm btn-icon btn-soft-secondary text-gray-400" href="#!" tabIndex={0}>
                                        <i className="fab fa-linkedin-in btn-icon-inner"></i>
                                    </a>
                                </li>

                                <li className="list-inline-item mx-0">
                                    <a className="btn btn-sm btn-icon btn-soft-secondary text-gray-400" href="#!" tabIndex={0}>
                                        <i className="fab fa-dribbble btn-icon-inner"></i>
                                    </a>
                                </li>

                            </ul>
                            <p className="mb-0">Copyright © Erilisdesign.com 2020. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>

        )
    }

}
export default Footer;