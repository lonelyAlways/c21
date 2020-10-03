var fixedRect, movingRect,gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  gameObject1=createSprite(100,100,50,50)
  gameObject1.shapeColor="blue"

  gameObject2=createSprite(300,100,50,50)
  gameObject2.shapeColor="blue"

  gameObject3=createSprite(500,100,50,50)
  gameObject3.shapeColor="blue"

  gameObject4=createSprite(700,100,50,50)
  gameObject4.shapeColor="blue"
}

function draw() {
  background(0);  
 // movingRect.y=mouseY;
  //movingRect.x=mouseX; 
  
  BounceOff(movingRect,fixedRect)
  if(isTouching(movingRect,gameObject4)){
    gameObject4.shapeColor="red";
    movingRect.shapeColor="red";
  }else{
    gameObject4.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  drawSprites();
}


