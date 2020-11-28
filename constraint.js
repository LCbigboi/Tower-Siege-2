class ConstraintClass{
    constructor(body1,point2){
        var constrainedOptions={
            bodyA:body1,
            pointB:point2,
            length:30,
            stiffness:0.02
        }
    this.constrained=Constraint.create(constrainedOptions)
    World.add(world,this.constrained);

    }
    display(){
        push();
        strokeWeight(8);
        stroke(random(0,255),random(0,255),random(0,255));
        if (this.constrained.bodyA!=null){
        var pos1=this.constrained.bodyA.position;
        var pos2=this.constrained.pointB;
        line(pos1.x,pos1.y,pos2.x,pos2.y);
        }
        

        pop();
    }
fly(){
    this.constrained.bodyA=null;
}

attach(body){
    this.constrained.bodyA=body;
}

}