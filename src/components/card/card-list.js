import { Divcomp } from "../../common/div-component";
import './card-list.css';

export class Card extends Divcomp{
    constructor(appState, cardState){
        super();
        this.cardState = cardState;
        this.appState = appState;
    }

    deleteFromFavorites(){
        this.appState.favorites = this.appState.favorites.filter(
            b => b.key !==  this.cardState.key
        )
    }
    addToFavorites(){
        this.appState.favorites.push(this.cardState);
        console.log(this.cardState)
    }

    render(){
        this.el.classList.add('card');
        const existInFavorites = this.appState.favorites.find(b => b.key == this.cardState.key)
        this.el.innerHTML = `
            <div class="card__image">
                <img src="https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg" alt="обложка" />
            </div>
            <div class="card__info">
                <div class="card__name">
                    ${this.cardState.title}
                </div>
                <div class="card__author">
                    ${this.cardStatauthor_name ? this.cardState.author_name[0] : 'не задано'}
                </div>
                <div class="card__footer">
                    <button class="button__add ${existInFavorites ? 'button__active' : ''}">
                    ${existInFavorites ? '<img src="/static/sssss.svg"  />' : '<img src="/static/shape.png"  />'}
                    </button>
                </div>
            </div>
        `
        if(existInFavorites){
            this.el.querySelector('button').addEventListener('click', this.deleteFromFavorites.bind(this));
        } else{
            this.el.querySelector('button').addEventListener('click', this.addToFavorites.bind(this));
        }
        return this.el
    }
}