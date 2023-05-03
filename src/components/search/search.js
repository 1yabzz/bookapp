import { Divcomp } from "../../common/div-component";
import './search.css';

export class Search extends Divcomp{
    constructor(state){
        super();
        this.state = state;
    }
    search(){
        const value = this.el.querySelector('input').value;
        this.state.searchQuery = value;
    }

    render(){
        this.el.classList.add('search');
        this.el.innerHTML = `
            <div class="search__wrapper">
                <input type="text" placeholder="Найти книгу или автора..." class="search__input" value="${this.state.searchQuery ? this.state.searchQuery : ''}"/>
                <img src="/static/Search.svg" alt="иконка поиска" />
            </div>
            <button><img src="/static/sss.png"  alt="кноgка"/></button>
        `
        this.el.querySelector('button').addEventListener('click', this.search.bind(this))
        this.el.querySelector('input').addEventListener('keydown', (event) => {
            if(event.code == 'Enter'){
                this.search();
            }
        })
        return this.el;
    }
}