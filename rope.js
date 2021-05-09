class Rope{
    constructor(b1,p2){
        var a={bodyA:b1,pointB:p2,length:100,stiffness:0.23}
        this.c=Matter.Constraint.create(a)
        World.add(world,this.c)
        this.d=p2
    }
    fly(){
        this.c.bodyA=null
    }
    display(){
if(this.c.bodyA){
    line(this.c.bodyA.position.x,this.c.bodyA.position.y,this.d.x,this.d.y)
}
    }
}