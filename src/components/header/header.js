import { Divcomp } from "../../common/div-component";

export class Header extends Divcomp{
    constructor(appState){
        super();
        this.appState = appState;
    }

    render(){
        this.el.innerHTML = "";
        this.el.classList.add('header');
        this.el.innerHTML = `
            <div>
                <img src="static/Logo.svg" alt="Логотип" />
            </div>
        `
        return this.el;
    }
}