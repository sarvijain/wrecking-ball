class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
        }
        this.body=Matter.Bodies.rectangle(x, y, width, height,options)
        this.width=width;
        this.height=height;
         Matter.World.add(rectangle1,this.body);
    }
    display(){
        fill("brown");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }


    
}
