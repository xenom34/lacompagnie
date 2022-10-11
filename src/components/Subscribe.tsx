import React, {useCallback} from "react";


class Subscribe extends React.Component<any, any>{
    render() {
        return (
            <div className="modal fade" id="subscribeModal" tabIndex={-1} role="dialog" aria-labelledby="subscribeNewsletter">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content hover-parent">

                        <button type="button" className="btn btn-sm btn-icon btn-primary position-absolute top-0 right-0 mt-n3 mr-n3 zindex-1" data-dismiss="modal">
                            <i className="fas fa-times btn-icon-inner"></i>
                        </button>
                    </div>
                </div>
            </div>

        )
    }

}