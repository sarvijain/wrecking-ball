class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:300,
        }
        this.body=Matter.Constraint.create(options) 
        this.pointB=pointB
        
         Matter.World.add(rectangle1,this.body);
    }
    display(){
        if(this.body.bodyA){ 
            push();
            
            strokeWeight(5);
            stroke("black")
            line(this.pointB.x,this.pointB.y,this.body.bodyA.position.x,this.body.bodyA.position.y)
            
            pop();}
       
    }


    
}