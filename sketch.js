
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(900, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Roof (300,30,30,300);
    bob1= new Bob (300,100,50);
	bob2= new Bob (240,100,50);
	bob3= new Bob (180,100,50);
	bob4= new Bob (360,100,50);
	bob5= new Bob (420,100,50);
    chain1 = new Rope (bob1.body, ground.body,300,30);
	chain2 = new Rope (bob2.body, ground.body,240,30);
	chain3 = new Rope (bob3.body, ground.body,180,30);
	chain4 = new Rope (bob4.body, ground.body,360,30);
	chain5 = new Rope (bob5.body, ground.body,420,30);
	Engine.run(engine);

	
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
 
}