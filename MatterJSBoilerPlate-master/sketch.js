const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;
var graveyardimg;
var zombie;
var hero;
var ground;
var house, houseImage;
var score = 0;


function preload(){
	graveyardimg=loadImage("JS/Graveyard.jpg")
	houseImage=loadImage("JS/house.png");

}

function setup() {
	createCanvas(displayWidth-20, displayHeight-100);
	

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(displayWidth/2,displayHeight/2+100,displayWidth,20);

	zombie = new Zombie(displayWidth/2-600,displayHeight/2-150);

	zombie2 = new Zombie(displayWidth/2-500,displayHeight/2-150);

	zombie3 = new Zombie(displayWidth/2-400,displayHeight/2-150);

	farmer = new Hero(800,200)

	axe1 = new axe(500,200,170,170);

	slingshot = new rope(axe1.body,{x:500, y:200});

	Engine.run(engine);
}


function draw() {
  ground.display();
  background(graveyardimg);
  image(houseImage,950,60,450,450);

  //ground.display();
  zombie.display();
  zombie2.display();
  zombie3.display();
  farmer.display();
  axe1.display();
  slingshot.display();
  

	
 

}
function mouseDragged(){

 Matter.Body.setPosition(axe1.body, {x: mouseX , y: mouseY});

 }
 function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}
function keyPressed(){
    if(keyCode === 32){
        axe1.trajectory=[];
        Matter.Body.setPosition(axe1.body, {x:200, y:50});
        slingshot.attach(axe1.body);
    }
}

