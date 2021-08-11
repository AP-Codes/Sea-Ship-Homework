var sea;
var sea_image
var ship, ship_moving, edges;


function preload(){
  ship_moving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
  sea_image = loadImage("sea.png")

}

function setup(){
  createCanvas(400,400);

  sea = createSprite(50, 150, 600, 5)
  sea.addImage("sea", sea_image )
  sea.velocityX = -5;
  sea.scale=1;

  ship = createSprite(160, 210, 20, 50);
  ship.addAnimation("moving", ship_moving);
  edges = createEdgeSprites();
  ship.scale=0.3;
}

function draw() {
  background("blue");
 
  if(sea.x<0){
    sea.x=sea.width/2
  }


  drawSprites();

}

