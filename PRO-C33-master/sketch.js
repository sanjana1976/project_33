var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle
var turn=0
var Gamestate='Play';
var line
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  //line= createSprite(400,480,100000,10)
if(Gamestate==='Play'){
   for (var k = 0; k <=width; k = k + 90) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 15, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    
}
//if(particle.body.position.y>760) {
 // if(particle.body.position.x< 300)/*
 //{
 //   score= score+500
  //  particle=null
  //  if(turn>= 5)
  //  {
  //    Gamestate==="end"
   // text("GAME OVER",200,200)
  
//}
//}
    
  }
    

 


function draw() {
  background('black');
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();}
 
  for (var j = 0; j < particle.length; j++) {
   
     particle[j].display();
   //  particle.addArray(particle)
   
  }
   
  //line.display();
 
   if(turn===5){
     Gamestate='end'
     textSize(50)
     stroke('red')
     text("GAMEOVER",280,250)
     textSize(30)
     text("PRESS SPACE TO PLAY AGAIN",200,480)
   }
   if(Gamestate==='end'&& keyCode===32){
     Gamestate= 'Play'
     turn=0
     score=0
   
    // text("play",200,100)
   }

 //  mousePressed();
}


function mousePressed(){
  if( Gamestate==='Play')
  {     turn= turn+1
score= score+100

particle.push(new Particle(mouseX,10,10,10));

  }
}