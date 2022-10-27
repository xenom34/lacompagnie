import React from "react";
import {MDCTextField, } from "@material/textfield";
import {MDCTextFieldHelperText} from '@material/textfield/helper-text';

class TextField extends React.Component<any, any>{
    static nbComponents = 0;
    private textField: MDCTextField | undefined;
    private readonly id: number;
    private regex = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    private helperText: any;
    private message : string;

    constructor(props:any) {
        super(props);
        this.id = TextField.nbComponents++;
        this.state = {}
        this.message=""
    }

    componentDidMount (){
        this.textField = new MDCTextField(document.querySelector('#numberField'+this.id) as HTMLElement)
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

        if(this.props.confMdp === true){
            if(event.target.value.length < 6){
                // @ts-ignore
                this.textField.valid = false;
                this.setState({
                    message: "Mot de passe trop petit"
                })
            }
            else {
                // @ts-ignore
                this.textField.valid = true;
            }
        }else if(this.props.confMdp && this.props.prout() === false){
            // @ts-ignore
            this.textField.valid = false;
            this.setState({
                message: "Les MDP ne correspondent pas"
            })

        }else{
            // @ts-ignore
            this.textField.valid = true;
        }
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
                    <input onFocus={this.onChange} onChange={this.onChange} min = {this.props.resMinMdp === true ? 6 : 1} type={this.props.MDP ===  true ? "password" : "string"}  className="mdc-text-field__input"  aria-labelledby="my-label-id" />
                </label>
                <div className="mdc-text-field-helper-line">
                    <div id={'helperText'+ this.id} className="mdc-text-field-helper-text mdc-text-field-helper-text--validation-msg">
                        {this.state.message}
                    </div>
                </div>
            </div>
        );
    }
}

export default TextField;