import { Divcomp } from "../../common/div-component";
import { Card } from "../card/card-list";
import './card.css';

export class CardList extends Divcomp{
    constructor(appState, state){
        super();
        this.state = state;
        this.appState = appState;
    }

    render(){
        if(this.state.loading === true){
            this.el.innerHTML = `<div class="card_list__loader">loading...</div>`;
            return this.el;
        }
        
        
        const cardgrid = document.createElement('div');
        cardgrid.classList.add('card_grid');
        this.el.append(cardgrid);
        for (const card of this.state.list){
            cardgrid.append(new Card(this.appState, card).render())
        }
        return this.el;
    }
}