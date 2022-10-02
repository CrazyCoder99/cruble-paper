
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

//ball.debug = true



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800,670,1600,20);
	leftSide = new Ground(1100, 600, 20, 120);
	rightSide = new Ground(1300, 600, 20, 120);

	var ballOptions = {
		isStatic : false,
		restitution : 0.3,
		density : 1.2
	  }
	  ball = Bodies.circle(200, 100, 30, ballOptions);
	  World.add(world, ball);

	 
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  //ellipseMode(RADIUS);

  background(51);

  ground.show();
  leftSide.show();
  rightSide.show();

  ellipse(ball.position.x, ball.position.y, 20, 20);
  
  

  Engine.update(engine);

 
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, {x:200, y:-200});
	}
}


