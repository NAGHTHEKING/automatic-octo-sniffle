const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var img;
function preload()
{
	img= loadImage("sprites/dustbingreen.png")
}

function setup() {
	createCanvas(800, 200);

	engine = Engine.create();
	world = engine.world;
ground= new Ground(400,195,800,15)
	body1= new Rectangle(600,135,10,70)
body2= new Rectangle(660,135,10,70)

circul=new Circul(100,25,25)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 body1.display();
 body2.display();
  imageMode (CENTER);
 image (img,620,135,100,100)
  ground.display();
  text("press up arrow to see magic and press down arrow while ball is in the air to see more magic...try and find the text 'CREEPAR AWW MAN'", 10,10)
   text("💡 Psst Hot Tip: try to look outside the canvas...",10,30)
  
  circul.display();
  drawSprites();

  if(circul.body.position.y>200){
    text("CREEPAR AWW MAN😝😛",10,50)
    fill(255)
  }
 }

 function keyPressed(){
 
  if(keyCode===38){

    Matter.Body.applyForce(circul.body,circul.body.position,{x:157,y:-157})
  }

  if(keyCode===40){

    Matter.Body.applyForce(circul.body,circul.body.position,{x:-157,y:157})
  }


  
 }
  
