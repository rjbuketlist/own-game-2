var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obsTop2,obsTop2Img;
var obsBottom1,obsBottom1Img,obsBottom2Img,obsBottom3Img;
var gameOver,gameOverImg;


function preload(){
bgImg = loadImage("assets/bg.png")
obsTop2Img = loadImage("assets/obsTop2.png")
obsBottom1Img = loadImage("assets/obsBottom1.png");
obsBottom2Img = loadImage("assets/obsBottom2.png")
obsBottom3Img = loadImage("assets/obsBottom3.png")
gameOverImg = loadImage("assets/gameOver.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage("bg",bgImg);
bg.x = bg.width/2;
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;


gameOver = createSprite(200,200,20,40);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.5
gameOver.visible=false;




}

function draw() {
  
  background("black");

    bg.velocityX=-2

    if(bg.x<0){
      bg.x = bg.width/2;
    }
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY= -6  ;
            
          }

          if(keyDown("right_arrow")){
            balloon.velocityX=+6;
          }

          if(keyDown("left_arrow")){
            balloon.velocityX=-6;
          }

          balloon.velocityX=balloon.velocityX-0.1;

          balloon.velocityX=balloon.velocityX+0.1;

          //adding gravity
           balloon.velocityY = balloon.velocityY+2;
          
        spownObstical();
        spownObstop();

        drawSprites();



        
        
}

function spownObstical(){
  if(frameCount %60=== 0){
    obsBottom1=createSprite(600,300,40,10);
    obsBottom1.velocityX= -5;
    var  ran = Math.round(random(1,3))
      switch(ran){
        case 1: obsBottom1.addImage (obsBottom1Img);
            break;
        case 2: obsBottom1.addImage (obsBottom2Img);
            break;
        case 3: obsBottom1.addImage (obsBottom3Img); 
            break;
        default: break;           
      }
        obsBottom1.scale=0.1;
        obsBottom1.lifetime=200;
  }


}

function spownObstop(){
  if(frameCount %60=== 0){
    obsTop2 = createSprite(600,100,40,10);
    obsTop2.y =Math.round (random(50,120))
    obsTop2.addImage(obsTop2Img)
    obsTop2.scale=0.1;
    obsTop2.velocityX=-3;
    obsTop2.lifetime=200;
  }
}


