const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
const Body = Matter.Body;

var engine, world;
var box1, pig1;
var backGroundImage,constrain,score=0;

function setup(){
    var canvas = createCanvas(1500,1000);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(750,height,1500,20);
    platform1 = new Ground(300,700,300,20);
    platform2 = new Ground(900,500,500,20);
    polygon = new Polygon(1200,145,100,100);
    constrain = new ConstraintClass(polygon.body,{x:1200,y:145})
    box1 = new Box(170,688,50,50);
    box2 = new Box(220,688,50,50);
    box3 = new Box(270,688,50,50);
    box4 = new Box(320,688,50,50);
    box5 = new Box(370,688,50,50);
    box6 = new Box(420,688,50,50);
    box7 = new Box(220,658,50,50);
    box8 = new Box(270,658,50,50);
    box9 = new Box(320,658,50,50);
    box10 = new Box(370,658,50,50);
    box11 = new Box(270,638,50,50);
    box12 = new Box(320,638,50,50);
    //ground level for platform 2 is goin to b 7 objects
    box13 = new Box(730,460,50,50);
    box14= new Box(780,460,50,50);
    box15 = new Box(830,460,50,50);
    box16 = new Box(870,460,50,50);
    box17 = new Box(930,460,50,50);
    box18 = new Box(970,460,50,50);
    box19 = new Box(1030,460,50,50);
    box20 = new Box(1070,460,50,50);
    //first level=5
    box21 = new Box(740,405,50,50);
    box22= new Box(790,405,50,50);
    box23 = new Box(840,405,50,50);
    box24 = new Box(890,405,50,50);
    box25 = new Box(940,405,50,50);
    box26 = new Box(990,405,50,50);
    box27 = new Box(1040,405,50,50);
    //sec level=3
    box28 = new Box(770,357,50,50);
    box29 = new Box(820,357,50,50);
    box30 = new Box(870,357,50,50);
    box31 = new Box(920,357,50,50);
    box31 = new Box(920,357,50,50);
    box32 = new Box(970,357,50,50);
    //third level=1

    


}

function draw(){
  background("black")

  Engine.update(engine)

  ground.display();
  platform1.display();
  platform2.display();
  polygon.display();
  constrain.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();

  textSize(20);
  fill("white");
  text("Score = "+score,10,10);
}

function mouseDragged(){
  Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
      constrain.fly();
  
  }
  
  function keyPressed(){
      if(keyCode==32){
        constrain.attach(polygon.body)
      }
  
  }