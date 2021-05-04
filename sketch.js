var rectangle1;
var engine;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var ball1;
var rope;
function setup(){
  createCanvas(600,600);
 engine=Matter.Engine.create()
 rectangle1=engine.world;
 ground=new Ground(300,570,600,50);
 box1=new Box(560,500,50,50)
 box2=new Box(500,500,50,50);
 box3=new Box(560,450,50,50)
 box4=new Box(500,450,50,50);
 box5=new Box(560,400,50,50)
 box6=new Box(500,400,50,50);
 box7=new Box(560,350,50,50)
 box8=new Box(500,350,50,50);
 box9=new Box(560,300,50,50)
 box10=new Box(500,300,50,50);
 box11=new Box(440,250,50,50)
 box12=new Box(440,250,50,50);
 box13=new Box(440,250,50,50)
 box14=new Box(440,250,50,50);
 box15=new Box(440,250,50,50)
 box16=new Box(440,250,50,50);
 box17=new Box(560,250,50,50)
 box18=new Box(560,250,50,50);
 box19=new Box(500,250,50,50)
 box20=new Box(500,250,50,50);
 box21=new Box(500,250,50,50)
 box22=new Box(500,250,50,50);
 box23=new Box(380,250,50,50);
 box24=new Box(380,250,50,50);
 box25=new Box(380,250,50,50);
 box26=new Box(380,250,50,50);
 box27=new Box(380,250,50,50);
 box28=new Box(380,250,50,50);
 box29=new Box(380,250,50,50);
 box30=new Box(380,250,50,50);
 box31=new Box(380,250,50,50);
 box32=new Box(380,250,50,50);
 box33=new Box(380,250,50,50);
 ball1=new Ball(200,300,80,80);
 rope=new Rope(ball1.body,{x:250,y:100});
}

function draw(){
  background("blue");
  Matter.Engine.update(engine);
  ground.display();
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
  box33.display();
  ball1.display();
  rope.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}


