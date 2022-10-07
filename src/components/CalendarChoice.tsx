import React from "react";
import {MDCMenu} from "@material/menu";
import {MDCTextField, MDCTextFieldIcon} from "@material/textfield";

class CalendarChoice extends React.Component<any, any>{
    static nbComponents = 0;
    private textField: MDCTextField | undefined;
    private readonly id: number;

    constructor(props:any) {
        super(props);
        this.id = CalendarChoice.nbComponents++;
    }

    showMenu = ()=>{
        //this.menu.open = true;
    }

    componentDidMount() {
        this.textField = new MDCTextField(document.querySelector('#calendar'+this.id) as HTMLElement)
        const icon = new MDCTextFieldIcon((document.querySelector('#calendarIcon'+this.id)) as HTMLElement);
    }

    render() {
        let d = new Date();
        return (
            <label id={"calendar"+this.id} className="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon content">
                      <span className="mdc-notched-outline">
                        <span className="mdc-notched-outline__leading"></span>
                        <span className="mdc-notched-outline__notch">
                          <span className="mdc-floating-label" id="my-label-id">{this.props.title}</span>
                        </span>
                        <span className="mdc-notched-outline__trailing"></span>
                      </span>
                <i id={'calendarIcon'+this.id} className="material-icons mdc-text-field__icon mdc-text-field__icon--leading">event</i>
                <input className="mdc-text-field__input" type="date" min={d.toISOString().substring(0,10)} aria-labelledby="my-label-id"/>
            </label>
        );
    }
}

export default CalendarChoice
