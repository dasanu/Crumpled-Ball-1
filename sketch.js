
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color("yellow");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = Bodies.rectangle(width/2, 650, 800, 10 , {isStatic:true} );
	
 	World.add(world, ground);


	Engine.run(engine);

	box1=new Box(580,640,150,10);
	box2=new Box(650,595,10,100);
	box3=new Box(500,595,10,100);
	ball=new Ball(50,640,16.5);
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("yellow");
  rect(ground.position.x,ground.position.y,800,10);
  box1.display();
  box2.display();
  box3.display();
  
  ball.display();
  //keyPressed();

  //drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:40,y:-40});
	}
}
