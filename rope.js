class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){

        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
   display(){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB; 
                strokeWeight(7);
                stroke("white");


                line(pointA.x , pointA.y, pointB.x , pointB.y);    
                       
    }
}