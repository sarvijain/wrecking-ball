class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:1,
            friction:1,
            density:0.09,
        }
        this.body=Matter.Bodies.rectangle(x, y, width, height,options)
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
        stroke("black")
        fill("magenta");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }


    
}
