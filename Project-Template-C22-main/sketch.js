const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1
var bob2 
var bob3
var bob4
var bob5

var line1
var line2
var line3
var line4
var line5

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

  var ball_options={
    restitution: 0.95
  }

  //bob1 = Bodies.circle(400,300,20,20,ball_options);
    // World.add(world,bob1);

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

 
  //call display() to show ropes here
  
  display() 

    
  
  
  //create ellipse shape for multiple bobs here
ellipse(bob1.position.x,bob1.position.y,20)
 //ellipsemode(RADIUS)
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

//if (keyPressed(UP_ARROW)){
 
//}