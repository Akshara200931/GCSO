
var car,wall;
var speed;
var weight;

function setup() {
  createCanvas(800,400);

  speed = random(15,500);
  weight = random(1000,3000);

  wall = createSprite(750, 200, 25, 800);
 
  car = createSprite(50, 200, 25, 25);
  car.velocityX = speed;
  car.shapeColor="pink"
  wall.shapeColor="blue"
}

function draw() {
  background(0,0,0); 
  
   var deformation = (0.5 * weight*speed*speed) / 22500;

  
  

  if(car.isTouching (wall)){
  car.velocityX = 0;
  if(deformation >= 180 ){
		car.shapeColor = "red";	
  }else if(deformation < 180 && deformation > 80){
		car.shapeColor = "yellow";
  }else if(deformation <80){
        car.shapeColor = "green";
  }

  }
  drawSprites();
}

