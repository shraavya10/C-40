class Hurdle{
    constructor(x, y, width, height) {
        var options = {
           isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
      //  this.image = loadImage("images/hurdle.png");
        World.add(world, this.body);
      }
      display(){
       /* var angle = this.body.angle;
        push();
       
        rotate(angle);
        imageMode(CENTER);*/
        var posX=this.body.position.x;
        var posY=this.body.position.y;
        rect( posX, posY, this.width, this.height);
       // pop();
      }
}