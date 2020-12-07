const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,bin1,bin2,bin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(150,450,20,20);
	bin1 = new dustBin(1000,450,100,20);
	bin2 = new dustBin(1000,430,100,20);
	bin3 = new dustBin(1000,440,20,200);
	ground = new Ground(x/2,460,20,width);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
  drawSprites();
 
}

function keyPressed()
{
if (keyCode === UP_ARROW)
{
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,u:-85})
}
}
