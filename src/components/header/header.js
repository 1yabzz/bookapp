import { Divcomp } from "../../common/div-component";
import './header.css';

export class Header extends Divcomp{
    constructor(appState){
        super();
        this.appState = appState;
    }

    render(){
        this.el.classList.add('header');
        this.el.innerHTML = `
            <div>
                <img src="static/Logo.svg" alt="Логотип" />
            </div>
            <div class="menu">
                <a class="menu__item" href="#">
                    <img src="static/Search.svg" alt="Поиск книг" />
                    Поиск книг
                </a>
                <a class="menu__item" href="#favorites">
                    <img src="static/Favorites.svg" alt="Поиск книг" />
                    Избранное
                    <div class="menu__counter">
                    ${this.appState.favorites.length}
                    </div>
                </a>
            </div>
        `
        return this.el;
    }
}