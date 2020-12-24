var ground,ground1;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15;
var block16,block17,block18;
var SlingShot1;
var score = 0 ;


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(800,400);
 

  engine = Engine.create();
  world = engine.world;

  polygon = new Box (50,200,20,30);



 

  ground = new  Ground(400,260,200,10);
 ground1 = new  Ground(625,245,80,10);

 block1 = new  Box(330,235,30,40)
 block2 = new  Box(360,235,30,40)
 block3 = new  Box(390,235,30,40)
 block4 = new  Box(420,235,30,40)
 block5 = new  Box(450,235,30,40)

 block6 = new  Box(345,195,30,40)
 block7 = new  Box(375,195,30,40)
 block8 = new  Box(405,195,30,40)
 block9 = new  Box(435,195,30,40)
 
 block10 = new  Box(420,155,30,40)
 block11 = new  Box(390,155,30,40)
 block12 = new  Box(360,155,30,40)

block13 = new Box(375,115,30,40)
block14 = new Box(405,115,30,40)

block15 = new Box(395,75,30,40)

block16 = new Box (610,220,30,40)
block17 = new Box (640,220,30,40)

block18 = new Box (625,180,30,40)

polygon = new Ball(200,200,30,30)
SlingShot1 = new Slingshot(polygon.body,{x:100,y:200});

World.add(world,polygon)

} 

function draw() {
  background(255,255,255);
Engine.update(engine)



ground.display()
ground1.display()

block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
 

block6.display()
block7.display()
block8.display()
block9.display()
block10.display()
block11.display()
block12.display()

block13.display()
block14.display()
block15.display()

block16.display()
block17.display()
block18.display()


polygon.display()
SlingShot1.display()

block1.score()
block2.score()
block3.score()
block4.score()
block5.score()
block6.score()
block7.score()
block8.score()
block9.score()
block10.score()
block11.score()
block12.score()
block13.score()
block14.score()
block15.score()
block16.score()
block17.score()
block18.score()





text("SCORE:"+score,550,40);

 
}
function mouseDragged(){
Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})


}
function mouseReleased(){

SlingShot1.fly()

}
function keyPressed(){
  if(keyCode === 32){
   
     
     SlingShot1.attach(polygon.body);
     
  }}