import React from "react";
import {MDCMenu} from "@material/menu";
import {MDCTextField} from "@material/textfield";

class DropDownChoice extends React.Component<any, any>{
    private menu: any;
    static nbComponents = 0;
    private textField: MDCTextField | undefined;
    private readonly id: number;
    private readonly content: any;

    constructor(props:any) {
        super(props);
        this.id = DropDownChoice.nbComponents++;
        this.content = [];
        this.props.content.forEach((e:String) => {
            this.content.push(React.createElement('li',{class:'mdc-list-item', role:'menuitem'},[
                    React.createElement('span',{class:'mdc-list-item__ripple'},''),
                    React.createElement('span',{class:'mdc-list-item__graphic mdc-menu__selection-group-icon'},''),
                    React.createElement('span',{class:'mdc-list-item__text'},e),
                ]
            ))
        })
    }

    showMenu = ()=>{
        this.menu.open = true;
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
    }

    componentDidMount() {
        this.menu = new MDCMenu(document.querySelector('#menu'+this.id) as HTMLElement);
        this.textField = new MDCTextField(document.querySelector('#Dropdown'+this.id) as HTMLElement)
    }

    render = () => {
        return (
            <div className={"content"} style={{verticalAlign:"bottom"}}>
                <label onClick={this.showMenu} id={"Dropdown"+this.id} className="mdc-text-field mdc-text-field--outlined mdc-menu-surface--anchor">
    <span className="mdc-notched-outline">
      <span className="mdc-notched-outline__leading"></span>
      <span className="mdc-notched-outline__notch">
        <span className="mdc-floating-label" id="my-label-id">{this.props.title}</span>
      </span>
      <span className="mdc-notched-outline__trailing"></span>
    </span>
                    <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
                </label>
                <div className="mdc-menu-surface--anchor">
                    <div />
                    <div id={"menu"+this.id} className="mdc-menu mdc-menu-surface">
                        <ul className="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical" tabIndex={-1}>
                            <li>
                                {
                                    React.createElement('ul', {class:'mdc-menu__selection-group'},this.content)

                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}

export default DropDownChoice;