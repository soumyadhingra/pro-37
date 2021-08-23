var banana,jungle,monkey1,monkey2,monkey3,monkey4,monkey5,monkey6,monkey7,monkey8,monkey9,monkey10,stone
var FoodGroup,obstacleGroup;
var SurvivalTime;
var player
function preload(){
  
  banana=loadImage("images/banana.png");
  jungle=loadImage("images/jungle.jpg");
  monkey1=loadImage("images/monkey1.png")
  monkey2=loadImage("images/monkey2.png")
  monkey3=loadImage("images/monkey3.png")
  monkey4=loadImage("images/monkey4.png")
  monkey5=loadImage("images/monkey5.png")
  monkey6=loadImage("images/monkey6.png")
  monkey7=loadImage("images/monkey7.png")
  monkey8=loadImage("images/monkey8.png")
  monkey9=loadImage("images/monkey9.png")
  monkey10=loadImage("images/monkey10.png")
  stone=loadImage("images/stone.png")
  player= loadAnimation("monkey1.png","monkey2.png","monkey3.png","monkey4.png","monkey5.png",
  "monkey6.png","monkey7.png","monkey8.png","monkey9.png","monkey10.png");
}

function setup() {
  fill("white")
  text("score:"+score,500,50)
  score=0

  fill("black")
  text("SurvivalTime:"+SurvivalTime,350,50)
  SurvivalTime=0
  
  
  
  bananaImage=createSprite(0,0,800,400);
  bananaImage.addImage(bananaImage)
  bananaImage.scale=2
  bananaImage.x=baImage.width/2
  bananaImage.velocityX=-4;
  
  
  monkey=createSprite(100,340,20,50)
  monkey.addAnimation("player")
  monkey.scale=0.1
  
  ground=createSprite(400,350,800,1)
  ground.velocityX=-4
  ground.x=ground.width/2;
  ground.visible=false
  
}

function draw() {
  background("white");
  switch(score){
    case 10:monkey.scale=0.12;
      break;
      case 20:monkey.scale=0.14;  
      break;
      case 30:monkey.scale=0.16;
      break;
      case 40:monkey.scale=0.18;
      break;
      default:break;
      
  }

fruits();
  stones();
  
  if(bananaImage.x<0){
    bananaImage.x=baImage.width/2
  }

if(keyDown("UP_ARROW")&& monkey.y>=350){
  monkey.velocityY=-10
}
  monkey.velocityY=monkey.velocityY+0.3
  monkey.collide(ground)
  
  ground.velocityX=-7
  ground.x=ground.width/2;
  
 if(obstacleGroup.isTouching(monkey)){
  monkey.scale=0.2
 }
 if(monkey.isTouching(FoodGroup)){
   FoodGroup.destroyEach()
   score=score+1
   
 }
  drawSprites();
  fill("white")
  text("score:"+score,500,50)
  
  fill("black")
  var SurvivalTime=Math.round(frameCount/frameRate());
  text("SurvivalTime:"+SurvivalTime,350,50)
  
}
function fruits(){
  if(World.frameCount%200===0){
   
  banana2=createSprite(600,250,40,10);
    banana2.y=random(120,200)
  banana2.addImage(bananaImage)
  banana2.scale=0.05
  banana2.velocityX=-3
    banana2.lifetime=300
    monkey.depth=monkey.depth+1;
  FoodGroup.add(banana2)
}
}
function stones(){
  
 if(World.frameCount%300===0){
  obstacle=createSprite(670,380,10,10)
  obstacle.addImage(obstacle_Image)
  obstacle.velocityX=-4
  obstacle.scale=0.2
  obstacleGroup.add(obstacle)
  obstacle.lifetime=300
 }
}



