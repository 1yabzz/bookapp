(function () {
    'use strict';

    class AbsView{
        constructor(){
            this.app = document.getElementById('root');
        }

        setTitle(title){
            document.title = title;
        }
        renser(){
            return;
        }
        destror(){
            return;
        }
    }

    class MainView extends AbsView{
        constructor(){
            super();
            this.setTitle('поиск книг');
        }

        render(){
            const main = document.createElement('div');
            main.innerHTML = 'тест';
            this.app.innerHTML = '';
            this.app.append(main); 
        }
    }

    class App{
        routes = [
            {path: "", view: MainView}
        ]
        constructor(){
            window.addEventListener("hashchange",this.route.bind(this));
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

})();
