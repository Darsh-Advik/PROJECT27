class Ball{
    constructor(x, y,r) {
        var options = {
            'restitution':1,
            'friction':0,
            'density':0.3,
            //'isStatic':true
        }
        this.r = r;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,r,options);
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
      }
}