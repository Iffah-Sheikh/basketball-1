class Basketball {
    constructor (x,y){
        this.x = x
        this.y = y
        this.r = 30;
        var options = {
            isStatic: true,
            restitution: 0.2
        }

        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("Images/basketball.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, this.r, this.r);
        pop();
    }
}