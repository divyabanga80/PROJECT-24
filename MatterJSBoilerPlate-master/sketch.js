
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground,basket1,basket2,basket3,ball,color;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=Bodies.rectangle(400,590,800,20,{isStatic:true});
basket1=new BasketSide(500,570,100,20);
basket2=new BasketSide(580,550,20,65);
basket3=new BasketSide(420,550,20,65);
paperBall=new Paper(100,500,20);
world.add(world,ground);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  basket1.display();
  basket2.display();
  basket3.display();
  paperBall.display();
  rectMode(CENTER);
  rect(400,590,800,20)
  
 
 
}


function KeyPressed(){


if(keyCode===UP_ARROW){
	Body.applyForce(paperBall.paperball,paperball.position,{x:40,y:-80})





}
}