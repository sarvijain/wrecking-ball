class Ball{
    constructor(x1,y1,width,height){
        var options={
            isStatic:false,
            restitution:1,
            frictionAir:0.005,
            density:0.09,
        }
        this.body=Matter.Bodies.circle(x1,y1,50,options)
        this.width=width;
        this.height=height;
         Matter.World.add(rectangle1,this.body);
    }
    display(){
        var angle=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(angle);
        strokeWeight(5);
        stroke("white")
        fill("black");
        rectMode(CENTER);
        ellipse(0,0,this.width,this.height);
        pop();
    }


    
}