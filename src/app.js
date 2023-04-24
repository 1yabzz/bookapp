import { MainView } from "./views/main/main";

class App{
    routes = [
        {path: "", view: MainView}
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
        this.currentview = new view();
        this.currentview.render();
    }
}   

new App();