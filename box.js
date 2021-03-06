function Box (x, y, w, h) {
    var options = {
        restitution: 1,
        friction: 0
        
    }
    this.body = Bodies.rectangle(x,y,w,h);
    this.w = w;
    this.h = h;
    World.add(world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        rectMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        rect(0, 0, this.w, this.h, 2);

        pop();
    }
}