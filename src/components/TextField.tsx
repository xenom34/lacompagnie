import React from "react";
import {MDCTextField, } from "@material/textfield";

class TextField extends React.Component<any, any>{
    static nbComponents = 0;
    private textField: MDCTextField | undefined;
    private readonly id: number;

    constructor(props:any) {
        super(props);
        this.id = TextField.nbComponents++;
    }

    componentDidMount (){
        this.textField = new MDCTextField(document.querySelector('#numberField'+this.id) as HTMLElement)
        this.setState({
            nb:1
        })
    }

    render() {
        return (
            <div>
                <label id={"numberField"+this.id} className="mdc-text-field mdc-text-field--outlined mdc-menu-surface--anchor content">
    <span className="mdc-notched-outline">
      <span className="mdc-notched-outline__leading"></span>
      <span className="mdc-notched-outline__notch">
        <span className="mdc-floating-label" id="my-label-id">{this.props.title}</span>
      </span>
      <span className="mdc-notched-outline__trailing"></span>
    </span>
                    <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
                </label>
            </div>
        );
    }
}

export default TextField;