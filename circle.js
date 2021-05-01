class Circul {
    constructor(x, y, width) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':2
      }
      this.body = Bodies.circle(x, y, width, options);
      this.width = width;
      //this.height = height;
      //this.image= loadImage("sprites/paper.png")
      World.add(world, this.body);
      this.image = loadImage("sprites/paper.png")
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill(255);
     image(this.image,0, 0, this.width,this.width);
      pop();
    }
  };