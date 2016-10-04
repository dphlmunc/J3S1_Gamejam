const KeyView = require("./keyview.es6");
const CanvasView = require("./CanvasView.es6");
const PlayerModel = require("./PlayerModel.es6");
const Particle = require("./Particles.es6");
class Controller{
    constructor(){
        this.particles = [];
        this.key = new KeyView();
        this.view = new CanvasView();
        //this.loop();
        this.loop = this.loop.bind(this);
        this.key.setListener(this.playerUpdate);


    }

    playerUpdate(keys){
        console.log(keys);

    }

    loop(){
        this.particles.push(new Particle(this.view.w / 2, this.view.h / 2));
        console.log(this.particles.length);
        this.particles.forEach( (p) => {
            p.move();

            this.view.draw(p.location, p.hue);
        });

        requestAnimationFrame(this.loop);



        this.particles = this.particles.filter((particle) => {
            return particle.isDead == false;
        });

    }

}
document.addEventListener("DOMContentLoaded", ()=>{
    const controller = new Controller();
    controller.loop();
});
