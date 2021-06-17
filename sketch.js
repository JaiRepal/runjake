var trackImg;
var jakeImg;

function preload(){
  trackImg=loadImage("path.png")
  jakeImg=loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png")
  
}

function setup(){
  createCanvas(400,400);
  
  path=createSprite(200,200);
  path.addImage(trackImg);
  path.velocityY=6;
  path.scale=1.2;
  
  jake=createSprite(180,340,30,30);
  jake.addAnimation("run jake",jakeImg);
  
  boundary1=createSprite(410,0,100,800);
  boundary1.visible=false;
  
  boundary2=createSprite(0,0,100,800);
  boundary2.visible=false;
  
  
  
  
  
}

function draw() {
  background(0);
  
  jake.x=World.mouseX
  jake.collide(boundary1);
  jake.collide(boundary2);
  
  if(path.y > 400){
    path.y = height/2
  }
  
 drawSprites()
}
