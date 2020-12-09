const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

function preload(){
	bimg = loadImage("Plucking mangoes/boy.png");
}

var ground;
var tree;
var stone;
var m1,m2,m3,m4,m5,m6,m7,m8;
var constraint;
var launchingForce = 100;

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(10,10,30);
	
	ground = new Ground(400,730,800,40);
	tree = new Tree(650,350);

	m1 = new Mango(750,300,30);
	m2 = new Mango(680,300,30);
	m3 = new Mango(750,380,30);
	m4 = new Mango(700,390,36);
	m5 = new Mango(650,250,30);
	m6 = new Mango(600,360,40);
	m7 = new Mango(650,400,38);
	m8 = new Mango(720,250,41);

	constraint = new SlingShot(stone.body,{x:145,y:600});

	var render = Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:800,
			height:800,
			wireFrames:false
		}
	})

	Engine.run(engine);
  
}


function draw() {
  background("cyan");

  textSize(20);
  text("Press SPACE to get a second chance",50,50);

  image(bimg,200,660,10,10);

  detectcollision(stone,m1);
  detectcollision(stone,m2);
  detectcollision(stone,m3);
  detectcollision(stone,m4);
  detectcollision(stone,m5);
  detectcollision(stone,m6);
  detectcollision(stone,m7);
  detectcollision(stone,m8);
   

  ground.display();
  tree.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  stone.display();
  constraint.display();

  drawSprites();
  
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    constraint.fly();
}

function detectcollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
		console.log(distance);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:130,y:600})
		constraint.attach(stone.body);
	}
}





