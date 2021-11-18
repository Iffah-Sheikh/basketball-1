const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var basketballPlayerImg, courtImg, hoopImg, basketballImg;
var basketballPlayer, basketball;

function preload() {
  basketballImg = loadImage("Images/basketball.png");
  basketballPlayerImg = loadImage("Images/basketball-player.png");
  courtImg = loadImage("Images/Court.png");
  hoopImg = loadImage("Images/hoop-2.png");
}

function setup() {
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  basketballPlayer = Bodies.rectangle(400, 400, 10, 10);
  World.add(world, basketballPlayer);
  basketballPlayer.options
  
  //basketballPlayer = createSprite(400, 400, 10, 10);
  //basketballPlayer.addImage("player", basketballPlayerImg);
  //basketballPlayer.scale = 0.19

  basketball = new Basketball(395, 390);
}

function draw() {
  background(255);
  Engine.update(engine);
  image(basketballPlayerImg, basketballPlayer.position.x, basketballPlayer.position.y);
  //drawSprites();
  basketball.display();
}