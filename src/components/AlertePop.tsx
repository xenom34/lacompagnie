import React from "react";
import {MDCDialog} from '@material/dialog';

const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));

dialog.listen('MDCDialog:opened', function() {
    // Assuming contentElement references a common parent element with the rest of the page's content
    contentElement.setAttribute('aria-hidden', 'true');
});
dialog.listen('MDCDialog:closing', function() {
    contentElement.removeAttribute('aria-hidden');
});
class AlertePop extends React.Component<any, any>{
    render(){
        <div className="mdc-dialog">
            <div className="mdc-dialog__container">
                <div className="mdc-dialog__surface"
                     role="alertdialog"
                     aria-modal="true"
                     aria-labelledby="my-dialog-title"
                     aria-describedby="my-dialog-content">
                    <div className="mdc-dialog__content" id="my-dialog-content">
                        Discard draft?
                    </div>
                    <div className="mdc-dialog__actions">
                        <button type="button" className="mdc-button mdc-dialog__button" data-mdc-dialog-action="cancel">
                            <div className="mdc-button__ripple"></div>
                            <span className="mdc-button__label">Cancel</span>
                        </button>
                        <button type="button" className="mdc-button mdc-dialog__button"
                                data-mdc-dialog-action="discard">
                            <div className="mdc-button__ripple"></div>
                            <span className="mdc-button__label">Discard</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="mdc-dialog__scrim"></div>
        </div>
    }
}


export default AlertePop;