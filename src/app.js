import { FavView } from "./views/favorites/favorites";
import { MainView } from "./views/main/main";

class App{
    appState = {
        favorites: []
    }
    routes = [
        {path: "", view: MainView},
        {path: "#favorites", view: FavView}
    ]
    constructor(){
        window.addEventListener("hashchange",this.route.bind(this))
        this.route();
    }  
    route(){
        if(this.currentview){
            this.currentview.destroy();
        }
        const view = this.routes.find(r => r.path == location.hash).view;
        // console.log(view)
        this.currentview = new view(this.appState);
        this.currentview.render();
    }
}   

new App();