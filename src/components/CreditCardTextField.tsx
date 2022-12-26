import * as React from 'react';
import { MDCTextField } from '@material/textfield';

interface Props {
    // Props for the component go here
}

interface State {
    // State for the component goes here
}

export class CreditCardTextField extends React.Component<Props, State> {
    private textFieldElement: HTMLElement | null = null;
    private textField: MDCTextField | null = null;

    public componentDidMount() {
        this.textField = new MDCTextField(this.textFieldElement!);
    }

    public componentWillUnmount() {
        this.textField!.destroy();
    }

    public render() {
        return (
            <div className="mdc-text-field mdc-text-field--outlined" ref={(el) => (this.textFieldElement = el)}>
                <input type="text" className="mdc-text-field__input" placeholder="Credit Card Number" />
                <label className="mdc-floating-label">Credit Card Number</label>
                <div className="mdc-notched-outline">
                    <svg>
                        <path className="mdc-notched-outline__path"></path>
                    </svg>
                </div>
                <div className="mdc-notched-outline__idle"></div>
            </div>
        );
    }
}
