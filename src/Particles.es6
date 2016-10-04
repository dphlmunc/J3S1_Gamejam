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

//Vanaf hier

const View = require("./CanvasView.es6");
class Particle {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.speed = 4;
        this.ySpeed = Math.random();
        this.xSpeed = (Math.random() * 6) -2;
        this.gravity = -0.7;
        this.isDead = false;
        this.age = 0;
        this.view = new View();
        this.hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        this.canvas= this.view.canvas;

    }


    move(){
        this.speed += this.ySpeed;
        this.y += this.speed;
        this.x += this.xSpeed;

        this.age++;

        if (this.y >= this.canvas.height - 10) {
            this.y = this.canvas.height - 10;
            this.speed *= this.gravity;
        }
        if ((this.x < 0 )||( this.x >= this.canvas.width) ||( this.age >= 500)) {
            console.log("kill me!");
            this.isDead = true;
        }

    }
    get location(){ // maker van de class geeft aan dat je alleen de locatie mag ophalen uit de class
        // hij maakt een get aan die de locatie teruggeeft
        return {x: this.x, y: this.y};
    }


}

module.exports = Particle;






module.exports = Particles;