import React from "react";
import {MDCTextField, } from "@material/textfield";
import {MDCTextFieldHelperText} from '@material/textfield/helper-text';
import { SyntheticEvent } from "react";
class TextField extends React.Component<any, any>{
    static nbComponents = 0;
    private textField: MDCTextField | undefined;
    private readonly id: number;
    private regex = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    private value: any;
    private helperText: any;


    constructor(props:any) {
        super(props);
        this.id = TextField.nbComponents++;
        if (this.props.card === true){
            this.regex = /^(?:4[0-9]{3}[\s-]?[0-9]{4}[\s-]?[0-9]{4}[\s-]?[0-9]{4}|[25][1-7][0-9]{2}[\s-]?[0-9]{4}[\s-]?[0-9]{4}[\s-]?[0-9]{4}|6(?:011|5[0-9][0-9])[0-9]{2}[\s-]?[0-9]{4}[\s-]?[0-9]{4}[\s-]?[0-9]{4}|3[47][0-9]{2}[\s-]?[0-9]{6}[\s-]?[0-9]{5}|3(?:0[0-5]|[68][0-9])[0-9]{2}[\s-]?[0-9]{6}[\s-]?[0-9]{4}|(?:2131|1800|35\d{3})[\s-]?[0-9]{3}[\s-]?[0-9]{4}[\s-]?[0-9]{4})$/;
        }else if (this.props.month){
            this.regex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
        }else if (this.props.mandatory){
            this.regex = /\S/;
        }else if (this.props.cvc){
            this.regex = /^[0-9]{3}$/;
        }
    }

    componentDidMount (){
        this.textField = new MDCTextField(document.querySelector('#textField'+this.id) as HTMLElement)
        this.textField.valid = true;
        this.setState({
            nb:1
        })
        this.helperText = new MDCTextFieldHelperText(document.querySelector('#helperText'+this.id) as HTMLElement);


    }
    onChange = (event:any) =>{
        if(this.props.restriction === true) {
            if (this.regex.test(event.target.value as string)) {
                // @ts-ignore
                this.textField.valid = true;
            }
            else{

                // @ts-ignore
                this.textField.valid = false;
                this.setState({
                    message: "Adresse mail invalide"
                })
            }
        }

        this.props.setter(event.target.value)
    }

    formatChecking = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // Get the target element (the input field) from the event object
        const input = event.target as HTMLInputElement;
        if (this.props.card === true){

            // Remove all non-numeric characters from the input
            input.value = input.value.replace(/\D/g, '');

            // Split the input into groups of 4 digits separated by spaces
            input.value = input.value.replace(/([0-9]{4})/g, '$1 ').trim();
        }if (this.props.month === true && input.value.length === 2 && !(event.key === 'Delete' || event.key === 'Backspace')) {
            input.value = input.value + '/';
        }

    }

    render() {
        return (
            <div>
                <label id={"textField"+this.id} className="mdc-text-field mdc-text-field--outlined mdc-menu-surface--anchor content">
    <span className="mdc-notched-outline">
      <span className="mdc-notched-outline__leading"></span>
      <span className="mdc-notched-outline__notch">
        <span className="mdc-floating-label" id="my-label-id">{this.props.title}</span>
      </span>
      <span className="mdc-notched-outline__trailing"></span>
    </span>
                    <input onFocus={this.onChange} onChange={this.onChange} onKeyUp={this.formatChecking} value={this.value} type={this.props.MDP ===  true ? "password" : "string"} className="mdc-text-field__input" aria-labelledby="my-label-id" />
                </label>
                <div className="mdc-text-field-helper-line">
                    <div id={'helperText'+ this.id} className="mdc-text-field-helper-text mdc-text-field-helper-text--validation-msg">
                        {this.props.card ? "Numéro de carte invalide" : "Saisie invalide"}
                    </div>
                </div>
            </div>
        );
    }
}

export default TextField;