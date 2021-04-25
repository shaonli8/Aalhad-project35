var balloon,balloonImage1,balloonImage2;
// create database and position variable here
var database,position;

function preload(){
   bg =loadImage("cityImage.png");
  // balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon2.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage2);
  balloon.scale=0.5;

  var balloonPosition = database.ref('ball/position')
    balloonPosition.on("value",readHeight,showError)

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    //write code to move air balloon in left direction
    changeHeight(-10,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    //write code to move air balloon in right direction
    changeHeight(+10,0);
  }
  else if(keyDown(UP_ARROW)){
    //write code to move air balloon in up direction
    changeHeight(0,-10);
  }
  else if(keyDown(DOWN_ARROW)){
    //write code to move air balloon in down direction
    changeHeight(0,+10);
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function changeHeight(x,y){
  database.ref('ball/position').set({
      'x':position.x+x,
      'y':position.y+y
  })
}

function readHeight(data){
  position = data.val()
  balloon.x = position.x
  balloon.y = position.y
}

function showError() {
  console.log('Error in database')
}