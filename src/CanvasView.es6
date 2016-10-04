class CanvasView{
    constructor(){
        this.canvas = document.getElementById("cnv");
        this.ctx = this.canvas.getContext("2d");
        this.w =window.innerWidth;
        this.h = window.innerHeight;
        this.canvas.width = this.w;
        this.canvas.height = this.h;


    }
draw(location,hue,)
{
    this.ctx.fillStyle=hue;
    this.ctx.fillRect(location.x,location.y,5,5);
}


}
module.exports = CanvasView;