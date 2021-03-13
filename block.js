class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':0,
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        if(this.body.speed>3){
          World.remove(world,this.body)
          this.body.visible == "false"
        }
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill("blue")
        rect(0, 0, this.width, this.height);
        pop();
      }
}