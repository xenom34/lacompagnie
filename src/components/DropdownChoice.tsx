import React from "react";
import {MDCMenu} from "@material/menu";
import {MDCTextField} from "@material/textfield";

class DropdownChoice extends React.Component<any, any>{
    private menu: any;
    static nbComponents = 0;
    static key = 0;
    private textField: MDCTextField | undefined;
    private readonly id: number;
    private content: any;
    private data: any;


    state = {isLoading : true}

    CallAPI = async () => {
        if(this.props.cabines == false){
            const response = await fetch("https://api.altair-studios.fr:4318/compagnie/reqAirports",).then((data) =>
                data.json()
            ).then((response) => {
                this.data = response;
                this.content = [];
                this.data.forEach((e: any) => {
                        this.content.push(React.createElement('li', {
                                className: 'mdc-list-item',
                                role: 'menuitem',
                                key: e.name+DropdownChoice.key++,
                                onClick: (event) => {
                                    this.props.setter(e.objectID)
                                    this.clickList(e.name)
                                }
                            }, [
                                React.createElement('span', {
                                    className: 'mdc-list-item__ripple',
                                    key: DropdownChoice.key++
                                }, ''),
                                React.createElement('span', {
                                    className: 'mdc-list-item__graphic mdc-menu__selection-group-icon',
                                    key: DropdownChoice.key++
                                }, ''),
                                React.createElement('span', {
                                    className: 'mdc-list-item__text',
                                    key: DropdownChoice.key++
                                }, e.name),
                            ]
                        ));

                    this.setState({isLoading: false});

                    }
                )

            })

        }
        else {
            const response = await fetch("https://api.altair-studios.fr:4318/compagnie/reqCabines",).then((data) =>
                data.json()
            ).then((response) => {
                this.data = response;
                this.content = [];
                this.data.forEach((e: any) => {
                        this.content.push(React.createElement('li', {
                                className: 'mdc-list-item',
                                role: 'menuitem',
                                key: e.cabine.toString(),
                                onClick: (event) => {
                                    this.props.setter(e.cabine)
                                    this.clickList(e.cabine)
                                }
                            }, [
                                React.createElement('span', {
                                    className: 'mdc-list-item__ripple',
                                    key: DropdownChoice.key++
                                }, ''),
                                React.createElement('span', {
                                    className: 'mdc-list-item__graphic mdc-menu__selection-group-icon',
                                    key: DropdownChoice.key++
                                }, ''),
                                React.createElement('span', {
                                    className: 'mdc-list-item__text',
                                    key: DropdownChoice.key++
                                }, e.cabine),
                            ]
                        ));
                        this.setState({isLoading: false});
                    }
                )
            })
        }

    }

     constructor(props:any) {
        super(props);
        this.data = [];
         this.content = [];
        this.id = DropdownChoice.nbComponents++;

    }

    clickList(event : any){
        this.textField = new MDCTextField(document.querySelector('#Dropdown'+this.id) as HTMLElement);
        this.textField.value = event;
    }

    showMenu = ()=>{
        const {isLoading} = this.state;
        this.menu.open = true;

    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        const {isLoading} = this.state;
        if(!isLoading){
            this.menu = new MDCMenu(document.querySelector('#menu'+this.id) as HTMLElement);
            this.textField = new MDCTextField(document.querySelector('#Dropdown'+this.id) as HTMLElement)
        }
    }

    componentDidMount() {
        this.CallAPI();
        const {isLoading} = this.state;
        if(!isLoading){
            this.menu = new MDCMenu(document.querySelector('#menu'+this.id) as HTMLElement);
            this.textField = new MDCTextField(document.querySelector('#Dropdown'+this.id) as HTMLElement)
        }
    }
    OnChange = (event:any) =>{
  
        this.props.setter(event.target.value)
    }

    render = () => {
        const {isLoading} = this.state;
        if(isLoading){
            return(<div>
                Lucile
            </div>)
        }

        return (
            <div className={"content"} style={{verticalAlign:"bottom"}}>
                <label onClick={this.showMenu}  id={"Dropdown"+this.id} className="mdc-text-field mdc-text-field--outlined mdc-menu-surface--anchor">
    <span className="mdc-notched-outline">
      <span className="mdc-notched-outline__leading"></span>
      <span className="mdc-notched-outline__notch">
        <span className="mdc-floating-label" id="my-label-id">{this.props.title}</span>
      </span>
      <span className="mdc-notched-outline__trailing"></span>
    </span>
                    <input onChange={this.OnChange} type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" readOnly={true}/>
                </label>
                <div className="mdc-menu-surface--anchor">
                    <div />
                    <div id={"menu"+this.id} className="mdc-menu mdc-menu-surface">
                        <ul className="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical" tabIndex={-1}>
                            <li key = {"ls"}>
                                    {
                                        React.createElement('ul', {className:'mdc-menu__selection-group'},this.content)
                                        
                                    }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}

export default DropdownChoice
