class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    
    
    baby1 = createSprite(900,60);
    baby1.addImage("baby1",baby1_img);
   
    baby2 = createSprite(900,230);
    baby2.addImage("baby2",baby2_img);
   
    baby3 = createSprite(900,430);
    baby3.addImage("baby3",baby3_img);
   
    baby4 = createSprite(900,630);
    baby4.addImage("baby4",baby4_img);
  
    baby = [baby1,baby2,baby3,baby4];
    console.log(baby);
  }

  play(){
    form.hide();
    

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background("#c68767");
      image(track,-displayWidth*4,0,displayWidth*5,displayHeight);
      strokeWeight(2);
      line(-3700,displayHeight,-3500,-10000);

      text("Press Space to jump",1200,15);
      text("Press Esc to jump",1200,200);
      text("Press Backspace to jump",1200,400);
      text("Press Enter to jump",1200,600);
      //score
      textSize(20);
    text("Score "+score,50,50);
      //index of the array
      var index = 0;

      //x and y position of the cars
      var y = -145;
      var x;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        y = y + 200;
        //use data form the database to display the cars in y direction
        x = displayWidth - allPlayers[plr].distance;
        console.log(allPlayers[plr].distance);
        baby[index-1].x = x;
        console.log(baby[index-1]);
        baby[index-1].y = y;

        if (index === player.index){
         // fill("white");
          //ellipse(x,y,100,100);
          baby[index - 1].shapeColor = "red";
          camera.position.x = baby[index-1].x;
          camera.position.y = displayHeight/2
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
console.log(baby[index-1]);
   /* if(keyCode==32){
    baby[index-1].y=baby[index-1].y-100;
    
    }
    baby[index-1].y=baby[index-1].y+5.0;*/
    if(keyCode==32 ) 
  {
    
    //text("yo",950,50);
  baby1.y=baby1.y-100 ;
  score=score+1;
  }
  baby1.y=baby1.y+5.0;


  if(keyCode==27)
  {
    
 baby2.y=baby2.y-100 ;
 score=score+1;

  }
  baby2.y=baby2.y+5.0; 

  if(keyCode==8)
  {
    baby3.y=baby3.y-100 ; 
    score=score+1;
  }
  baby3.y=baby3.y+5.0; 

  if(keyCode==13)
  {
    baby4.y=baby4.y-100 ;  
    score=score+1;

  }
  baby4.y=baby4.y+5.0; 

 
    /*if(keyCode=32) /*baby1.x==800 || baby1.x==500 && baby1.y==200 || baby1.y==100 || baby2.x==800 || baby2.x==500 && baby2.y==200 || baby2.y==100*/
  /*{
    text("yo",950,50);
  baby1.velocityY=-12 
  baby2.velocityY=-12 ;   

  score=score+1;
  }*/
    //baby1.velocityY=baby1.velocityY+0.8  
   // baby2.velocityY=baby2.velocityY+0.8;

   
    

   if(player.distance>5000)
   {
  console.log(baby[index-1].x);
    gameState=2;
    textSize(28);
    text("gameEnded.Thanks for playing",-3680,200);
    player.rank+=1;
    console.log(player.rank);
    Player.update(player.rank);
   }

    drawSprites();
  }
 end()
 {
console.log("Game Ended");
game.update(2);



 } 
}
