
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var ball,ballsprite,ground;
var d1,d2,d3;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	var options2 = {
		isStatic:false


	}
	
	 
	
	//Create the Bodies Here.
	ground = new box(400,650,800,5,options2);
	d1 = new box(600,602,5,80,options2);
	d2 = new box(670,530,5,220,options2);
	d3 = new box(635,645,70,5,options2);
	ball = new Ball ();

	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  d1.display();
  d2.display();
  d3.display();
  ball.display();
  ground.display();
  ball.keyPressed();
  

	//keyPressed();

  drawSprites();
 
}
































