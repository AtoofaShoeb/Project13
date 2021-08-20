var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage= loadImage("blue_balloon0.png")
  green_balloonImage= loadImage("green_balloon0.png")
  pink_balloonImage= loadImage("pink_Ballon0.png")
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,1));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
      blueBalloon()
      greenBalloon()
      pinkBalloon()
    }
  }
  
  drawSprites();
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 4;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueBalloon() {
  //write code for spwaning blue balloons
  var blue1 = createSprite(0,Math.round(random(40, 400)), 20, 20);
  blue1.addImage(blue_balloonImage);
  blue1.velocityX = 3;
  blue1.lifetime = 200;
  blue1.scale = 0.1;

}

function greenBalloon() {
  //write code for spwaning green balloons
 var green1= createSprite(0,Math.round(random(55,300)),20,20)
 green1.addImage(green_balloonImage)
 green1.velocityX = 2
 green1.lifetime = 350
 green1.scale=0.1
}

function pinkBalloon() {
  //write code for spwaning pink balloons
  var pink1 = createSprite(0,Math.round(random(65,350)),20,20)
  pink1.addImage(pink_balloonImage)
  pink1.velocityX= 1
  pink1.lifetime= 400
  pink1.scale= 0.1

}
