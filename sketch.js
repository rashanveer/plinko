const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particles = [];
var divisions = [];
var plinkos = [];
var divisionHeight = 300

function setup() {
  createCanvas(800,800);
  
	engine = Engine.create();
	world = engine.world;

ground1  =new Ground(width/2,height,width,20)

for(var k = 0;k<=width;k=k+80){
divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
console.log("forLoopdivi")
}
for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }
    for (var r = 50; r <=width; r=r+50) 
    {
    
       plinkos.push(new Plinko(r,175));
    }
    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }
    for (var r = 50; r <=width; r=r+50) 
    {
    
       plinkos.push(new Plinko(r,375));
    }
  


Engine.run(engine);

}

function draw() {
  background("black"); 
  ground1.display();
for(var k = 0;k<divisions.length;k++){
  divisions[k].display();
}
for (var i = 0; i < plinkos.length; i++) {
     
  plinkos[i].display();
  
}
if(frameCount%60 ===0){
  particles.push(new Particle(random(width/2-30,width/2+30),10,10))
  
  
  }
for(var j = 0;j<particles.length;j++){
  particles[j].display();
}

  drawSprites();
}







