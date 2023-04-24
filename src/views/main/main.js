import { AbsView } from "../../common/view";

export class MainView extends AbsView{
    constructor(){
        super();
        this.setTitle('поиск книг')
    }

    render(){
        const main = document.createElement('div');
        main.innerHTML = 'тест';
        this.app.innerHTML = '';
        this.app.append(main); 
    }
}