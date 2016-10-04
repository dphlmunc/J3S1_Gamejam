const KeyView = require("./KeyView.es6");
const CanvasView = require("./CanvasView.es6");
const PlayerModel = require("./PlayerModel.es6");


class Controller{
    constructor(){
        this.key = new KeyView();
        this._cnv = new CanvasView();
        this._ply = new PlayerModel();

       this.key.setListener(this.playerUpdate);
    }

    playerUpdate(keys){
       console.log(keys);

    }

}
document.addEventListener("DOMContentLoaded", () => {
    const c = new Controller();

});