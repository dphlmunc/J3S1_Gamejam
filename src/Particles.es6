const draw = require("./CanvasView.es6");
class Particles {
    constructor(rad = 40) {
        this.radius = rad;
        this.x = 0;
        this.y = 0;
        this.color = randomColor();
        this.xVelocity = 0;
        this.yVelocity = 0;
        this.c = document.getElementById("cnv");
        this.ctx = c.getContext("2d");
        this.c.width = window.innerWidth;
        this.c.height = window.outerHeight;

    }


}


module.exports = Particles;