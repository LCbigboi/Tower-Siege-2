class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.color = color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<5){
        var angle = this.body.angle;
        push();
        fill(this.color)
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        }
        else{
          World.remove(world,this.body);
          score=score+50
        }
      }
}