class KeyView{
    constructor() {
    window.onkeydown = (e) => {
        this.keyPressed(e)
    }; // Om te verkomen dat "this " naar window verwijst ipv object
    this.keyListener = null;
    }


    setListener(callback){
        this.keyListener = callback;

    }

    keyPressed(e){
        const keys = {
            left: e.keyCode ===  37 ? true : false,
            right: e.keyCode === 39 ? true : false

        };
this.keyListener(keys);
    }

}
module.export = KeyView;