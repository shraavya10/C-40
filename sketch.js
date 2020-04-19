var canvas, backgroundImage;

var gameState = 0;
var playerCount=0;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var baby, baby1,baby2,baby3,baby4;
var track,baby1_img,baby2_img,baby3_img,baby4_img,obstacle;
var hurdle,hurdle2;
var score=0;
function preload()
{
  track=loadImage("images/final track.jpg");
  baby1_img=loadImage("images/baby.jpg");
  baby2_img=loadImage("images/baby2.jpg");
  baby3_img=loadImage("images/baby3.jpg");
  baby4_img=loadImage("images/baby4.jpg");
  ground=loadImage("images/ground.png");
  obstacle=loadImage("images/hurdle.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-5);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
 
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2)
  {
game.end();


  }
    
  hurdle = createSprite(800,70,40,10);
  // hurdle.velocityX = - (6 + 3*count/100);
      hurdle.addImage("hurdle",obstacle);

  
    hurdle2 = createSprite(500,240,40,10);
hurdle2.addImage("hurdle",obstacle);

hurdle3 = createSprite(300,450,40,10);
hurdle3.addImage("hurdle",obstacle);

hurdle4 = createSprite(200,680,40,10);
hurdle4.addImage("hurdle",obstacle);



 // spawnObstacles(hurdle);
}

//function spawnObstacles(hurdle)
//{
 // if(World.frameCount % 60 === 0) {
 
    //generate random obstacles
   // var rand = randomNumber(1,6);
    //obstacle.setAnimation("obstacle" + rand);
    
    //assign scale and lifetime to the obstacle           
    //hurdle.scale = 0.5;
   // obstacle.lifetime = 70;
    //add each obstacle to the group
   // ObstaclesGroup.add(obstacle);
 // }
//}





