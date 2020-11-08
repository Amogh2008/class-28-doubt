
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree;
var mango1,mango2,mango3,mongo4;
var boy, boyImage;


function preload()
{
	

}	

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.


	tree = new Tree(600,350,400,400);
	tree.scale = 3;

	
	mango1 = new Mango(500,365,50);
	mango2 = new Mango(700,350,50);
	mango3 = new Mango(700,200,50);
	mango4 = new Mango(500,200,50);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  tree.display();
  

 
}



